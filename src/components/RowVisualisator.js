import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const INCREASE_COLOR = 'green';
const DECREASE_COLOR = 'red';
const NO_CHANGE_COLOR = 'black';

class RowVisualisator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedColor: NO_CHANGE_COLOR,
      currentMeasures: [],
    };
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    const currentValue = currentState.currentMeasures.last() && currentState.currentMeasures.last().value;
    const nextValue = nextProps.measurements.last().value;
    // always highlight in green new values
    if (!currentValue) {
      return {
        updatedColor: INCREASE_COLOR,
        currentMeasures: nextProps.measurements,
      };
    }
    if (currentValue !== nextValue) {
      // if comparable, see if value was decreased or increased
      let updatedColor;
      if (typeof nextValue === 'number') {
        updatedColor = nextValue > currentValue ? INCREASE_COLOR : DECREASE_COLOR;
      } else {
        // else highlight in green
        updatedColor = INCREASE_COLOR;
      }
      return {
        updatedColor,
        currentMeasures: nextProps.measurements,
      };
    } else {
      // don't highlight old values
      return {
        updatedColor: NO_CHANGE_COLOR,
      }
    }
  }

  render() {
    const { name, measurements, unit } = this.props;
    const { updatedColor } = this.state;
    return (
      <TableRow>
        <TableCell>
          { name }
        </TableCell>
        <TableCell style={{
          color: updatedColor,
          fontWeight: updatedColor === 'black' ? 'normal' : 'bold'
        }}>
          { this.renderValue(measurements.last().value) }
        </TableCell>
        <TableCell>
          { unit }
        </TableCell>
      </TableRow>
    );
  }

  renderValue(value) {
    switch(this.props.name) {
      case 'Location': {
        return this.renderLocation(value);
      }
      default: {
        if (typeof value === 'number') {
          return value.toFixed(2);
        } else {
          return value;
        }
      }
    }
  }

  renderLocation(value) {
    // 8 digits for precision of 1.11 mm
    return (
      <span>
        <span>Lat. : {value[0].toFixed(8)}</span>
        <br />
        <span>Long. : {value[1].toFixed(8)}</span>
      </span>
    )
  }
}

export {
  RowVisualisator,
};

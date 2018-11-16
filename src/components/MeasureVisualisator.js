import React from 'react';
import { keys } from 'lodash';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { RowVisualisator } from './RowVisualisator';

class MeasureVisualisator extends React.Component {
  render() {
    const { measures } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Measure
            </TableCell>
            <TableCell>
              Value
            </TableCell>
            <TableCell>
              Unit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            keys(measures).map((measure) => {
              const measureValue = measures[measure];
              return (
                <RowVisualisator
                  key={measure}
                  measurements={measureValue.measurements}
                  name={measure}
                  unit={measureValue.unit}
                />
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

function stateToProps(state) {
  return {
    measures: state.measures.measures,
  };
}

MeasureVisualisator = connect(stateToProps, null)(MeasureVisualisator);

export {
  MeasureVisualisator,
};

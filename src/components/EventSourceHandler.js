import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleNewMeasure } from '../reducers/measures/actions';

class EventSourceMapper extends React.Component {
  componentDidMount() {
    this.eventSource = new EventSource(`https://jsdemo.envdev.io/sse`);
    this.eventSource.onmessage = this.handleEventMessage;
  }

  componentWillUnmount() {
    this.eventSource.close();
  }

  handleEventMessage = (event) => this.props.handleNewMeasure(event.data)

  render() {
    return null;
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators({
    handleNewMeasure,
  }, dispatch);
}

const EventSourceHandler = connect(null, dispatchToProps)(EventSourceMapper);

export {
  EventSourceHandler
};

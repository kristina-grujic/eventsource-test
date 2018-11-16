import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleNewMeasure } from '../reducers/measures/actions';

/**
 * Class to handle connection to EventSource
 */
class EventSourceMapper extends React.Component {
  /**
   * Mounting of EventSource connection
   */
  componentDidMount() {
    this.eventSource = new EventSource('https://jsdemo.envdev.io/sse');
    this.eventSource.onmessage = this.handleEventMessage;
  }

  /**
   * Unmounting and closing of EventSource connection
   */
  componentWillUnmount() {
    this.eventSource.close();
  }

  /**
   * Handling of messages received from event source
   */
  handleEventMessage = (event) => this.props.handleNewMeasure(event.data)

  /**
   * This component is not rendered, it's purely used for logic side
   */
  render() {
    return null;
  }
}

EventSourceMapper.propTypes = {
  handleNewMeasure: PropTypes.func.isRequired,
};

/**
 * Connector for redux actions
 */
function dispatchToProps(dispatch) {
  return bindActionCreators({
    handleNewMeasure,
  }, dispatch);
}

const EventSourceHandler = connect(null, dispatchToProps)(EventSourceMapper);

export {
  EventSourceHandler
};

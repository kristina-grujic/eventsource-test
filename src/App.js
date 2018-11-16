import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { EventSourceHandler } from './components/EventSourceHandler';
import { MeasureVisualisator } from './components/MeasureVisualisator';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <React.Fragment>
          <MeasureVisualisator />
          <EventSourceHandler />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;

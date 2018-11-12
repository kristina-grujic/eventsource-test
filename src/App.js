import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { EventSourceHandler } from './components/EventSourceHandler';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <React.Fragment>
          <div />
          <EventSourceHandler />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;

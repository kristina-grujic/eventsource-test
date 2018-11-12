import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default store;

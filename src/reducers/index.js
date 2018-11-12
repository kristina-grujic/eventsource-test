import { combineReducers } from 'redux';

import measureReducer from './measures/reducer';

export default combineReducers({
  measures: measureReducer,
});

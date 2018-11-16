import produce from 'immer';
import {
  NEW_MEASURE_VALUE
} from './actions';

const initialState = {
  measures: {},
};

const measureReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case NEW_MEASURE_VALUE: {
        action.data.forEach((measure) => {
          if (!measure.measurements.length) {
            return;
          }
          let measurements = measure.measurements.map((measures) => ({
            timestamp: measures[0],
            value: measures[1],
          }));
          if (draft.measures[measure.name]) {
            draft.measures[measure.name] = {
              ...measure,
              measurements: [...draft.measures[measure.name].measurements, ...measurements]
            };
          } else {
            draft.measures[measure.name] = {
              ...measure,
              measurements
            };
          }
        });
        break;
      }
      default: {
        break;
      }
    }
  });


export default measureReducer;

import produce from "immer"

const initialState = {
  measures: [],
};

const measureReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default: {
        break;
      }
    }
  })


export default measureReducer;

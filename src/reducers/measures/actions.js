export const NEW_MEASURE_VALUE = 'NEW_MEASURE_VALUE';

const handleNewMeasure = (data) => (dispatch) => {
  dispatch({
    type: NEW_MEASURE_VALUE,
    data: JSON.parse(data),
  });
}

export {
  handleNewMeasure,
};

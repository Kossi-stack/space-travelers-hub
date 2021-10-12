import API from '../../api/index';

const initialState = [];
const GET_MISSIONS = 'missionsStore/missions/GET_MISSIONS';

export const getMissions = () => async (dispatch) => {
  const data = await API.getMissions();
  console.log('passed', data);

  console.log('missions => ', data);

  if (data) {
    dispatch({
      type: GET_MISSIONS,
      payload: data,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;

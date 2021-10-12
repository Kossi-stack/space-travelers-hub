import API from '../../api/index';

const initialState = [];
const GET_ROCKETS = 'missionsStore/missions/GET_ROCKETS';

export const getRockets = () => async (dispatch) => {
  const data = await API.getRockets();
  console.log('passed', data);

  console.log('rockets => ', data);

  if (data) {
    dispatch({
      type: GET_ROCKETS,
      payload: data,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default reducer;

import API from '../../api/index';

const initialState = [];
const GET_ROCKETS = 'missionsStore/missions/GET_ROCKETS';
const RESERVE_ROCKET = 'space_travlers_hub/rockets/RESERVE_ROCKET';

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

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;

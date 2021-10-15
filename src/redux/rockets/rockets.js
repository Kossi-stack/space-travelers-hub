import API from '../../api/index';

const initialState = [];
const GET_ROCKETS = 'rocketsStore/rockets/GET_ROCKETS';
const ADD_ROCKET_RESERVATION = 'rocketsStore/rockets/ADD_ROCKET_RESERVATION';
const CANCEL_ROCKET_RESERVATION = 'rocketsStore/rockets/CANCEL_ROCKET_RESERVATION';

export const getRockets = () => async (dispatch) => {
  const data = await API.getRockets();
  if (data) {
    dispatch({
      type: GET_ROCKETS,
      payload: data,
    });
  }
};

export const addRocketReservation = (id) => (dispatch) => {
  dispatch({
    type: ADD_ROCKET_RESERVATION,
    payload: id,
  });
};

export const cancelRocketReservation = (id) => (dispatch) => {
  dispatch({
    type: CANCEL_ROCKET_RESERVATION,
    payload: id,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    case ADD_ROCKET_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;

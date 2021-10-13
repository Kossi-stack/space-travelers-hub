import API from '../../api/index';

const initialState = [];
const GET_MISSIONS = 'missionsStore/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';

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

export const joinMission = (mission) => ({
  type: JOIN_MISSION,
  payload: mission,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...state, ...action.payload];
    case JOIN_MISSION:
      return state.map((missions) => {
        if (missions.id !== action.id) return missions;
        return { ...missions, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;

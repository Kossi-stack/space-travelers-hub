import API from '../../api/index';

const initialState = [];
const GET_MISSIONS = 'missionsStore/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

export const getMissions = () => async (dispatch) => {
  const data = await API.getMissions();
  if (data) {
    dispatch({
      type: GET_MISSIONS,
      payload: data,
    });
  }
};

export const joinMission = (mission) => (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: mission,
  });
};

export const leaveMission = (mission) => (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: mission,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [...action.payload];

    case JOIN_MISSION:
      return state.map((missions) => {
        if (missions.mission_id !== action.payload) return missions;
        return { ...missions, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((missions) => {
        if (missions.mission_id !== action.payload) return missions;
        return { ...missions, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;

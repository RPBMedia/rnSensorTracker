import {
  ACTIVITIES_FETCH_SUCCESS,
  SENSORS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  activities: [],
  sensors: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVITIES_FETCH_SUCCESS:
      return {
        ...state,
        activities: action.payload
      };

    case SENSORS_FETCH_SUCCESS:
      return {
        ...state,
        sensors: action.payload
      };

    default:
      return state;
  }
};

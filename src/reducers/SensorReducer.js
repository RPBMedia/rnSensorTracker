import {
  UPDATE_SENSOR_SUCCESS,
  SET_SELECTED_SENSOR
} from '../actions/types';

const INITIAL_STATE = {
  sensor: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SENSOR_SUCCESS:
    
      return {
        ...state,
        sensor: {
          ...state.sensor,
          silenced: true
        }
      };

      case SET_SELECTED_SENSOR:

        return {
          ...state,
          sensor: action.payload
        };

    default:
      return state;
  }
};

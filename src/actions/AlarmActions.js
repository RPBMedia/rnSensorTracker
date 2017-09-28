import {
  ACTIVITIES_FETCH_SUCCESS,
  SENSORS_FETCH_SUCCESS,
  SET_SELECTED_SENSOR,
  UPDATE_SENSOR_SUCCESS
} from './types';
import _ from 'lodash';

import { alarms } from '../fixtures/BackendData';

export const fetchActivities = () => {

  return {
    type: ACTIVITIES_FETCH_SUCCESS,
    payload: alarms.activities
  };
};

export const fetchSensors = () => {

  return {
    type: SENSORS_FETCH_SUCCESS,
    payload: alarms.sensors
  };
};

export const silenceSensorAlarm = (sensor) => {

  //Update the list in the "backend"
  //at this point, by importing the mqtt client, there
  //should be some sort of publish call to change the state
  //of a specific alarm

  return {
    type: UPDATE_SENSOR_SUCCESS,
    payload: sensor
  };

}

export const setSelectedSensor = (sensor) => {
  return {
    type: SET_SELECTED_SENSOR,
    payload: sensor
  };
}

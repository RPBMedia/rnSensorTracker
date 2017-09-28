import {
  ACTIVITIES_FETCH_SUCCESS,
  SENSORS_FETCH_SUCCESS,
  SET_SELECTED_SENSOR,
  UPDATE_SENSOR_SUCCESS
} from './types';
import _ from 'lodash';

import alarms from '../fixtures/BackendDatass';

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
  // sensorInList = _.find(alarms.sensors, (sen) => sen.deviceId === sensor.deviceId);
  // sensorInList.silenced = true;

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

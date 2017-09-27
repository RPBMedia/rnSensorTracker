import { combineReducers } from 'redux';
import AlarmsReducer from './AlarmsReducer';
import SensorReducer from './SensorReducer';

export default combineReducers({

  alarms: AlarmsReducer,
  sensorDetails: SensorReducer
});

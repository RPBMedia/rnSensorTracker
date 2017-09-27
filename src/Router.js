import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import AlarmList from './components/AlarmList';
import SensorDetails from './components/SensorDetails';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>


      <Scene key="main">
        <Scene
          key="alarmList"
          component={AlarmList}
          title="Alarms"
        />
        <Scene
          key="sensorDetails"
          component={SensorDetails}
          title="Sensor Details"
        />
      </Scene>

    </Router>
  );
};

export default RouterComponent;

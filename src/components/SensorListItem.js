import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';

import { setSelectedSensor } from '../actions';

class SensorListItem extends Component {
  onRowPress() {
    console.log('Sensor pressed');
    this.props.setSelectedSensor(this.props.sensor);
    Actions.sensorDetails();
  }

  setBooleanStyle(property){
    if(property){
      return styles.redBooleanStyle;
    }
    return styles.greenBooleanStyle;
  }

  setBatteryStyle(batteryLevel) {
    return batteryLevel > 49 ? styles.greenBooleanStyle : styles.redBooleanStyle;
  }

  setContainerStyle(){
    return this.props.sensor.alarmActive ? styles.emergencyContainerStyle : styles.containerStyle;
  }

  render() {
    const {
      deviceName,
      roomName,
      batteryLevel,
      alarmActive,
      online,
      silenced
    } = this.props.sensor;

    return (
      <TouchableHighlight onPress={this.onRowPress.bind(this)}>
        <View style={this.setContainerStyle()}>
          <CardSection>
            <Text style={styles.titleStyle}>{deviceName}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>{roomName}</Text>
          </CardSection>
          <CardSection>
          <Text style={styles.textStyle}>Battery:</Text>
          <Text style={this.setBatteryStyle(batteryLevel)}>{batteryLevel}%</Text>
          </CardSection>
          <CardSection>
            <Text style={this.setBooleanStyle(alarmActive)}>{alarmActive ? 'Alarm ON' : 'Alarm OFF'}</Text>
          </CardSection>
          <CardSection>
            <Text style={this.setBooleanStyle(online)}>{online ? 'Online' : 'Offline'}</Text>
          </CardSection>
          <CardSection>
            <Text style={this.setBooleanStyle(silenced)}>{silenced ? 'Silenced' : 'Not silenced'}</Text>
          </CardSection>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  containerStyle: {
    borderColor: 'grey',
    borderBottomWidth: 2,
  },
  emergencyContainerStyle: {
    borderColor: 'grey',
    backgroundColor: 'yellow',
    borderBottomWidth: 2,
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  textStyle: {
    fontSize: 13,
    color: 'grey',
    paddingLeft: 15
  },
  greenBooleanStyle: {
    color: 'green'
  },
  redBooleanStyle: {
    color: 'red'
  }
};

export default connect(null, { setSelectedSensor })(SensorListItem);

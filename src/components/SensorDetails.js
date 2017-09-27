import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { silenceSensorAlarm } from '../actions';

import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

class SensorDetails extends Component {
  componentWillMount() {}

  setBooleanStyle(property) {
    if (property) {
      return styles.redBooleanStyle;
    }
    return styles.greenBooleanStyle;
  }

  setBatteryStyle(batteryLevel) {
    return batteryLevel > 49
      ? styles.greenBooleanStyle
      : styles.redBooleanStyle;
  }

  renderDetailsHeader() {
    let alarmIsTriggered = false;
    message = 'Alarm is Silent';
    //Assumption: Only prompt the user to silence the alarm
    //if the alarm is active and NOT silenced
    if (
      this.props.sensor.alarmActive === true &&
      this.props.sensor.silenced === false
    ) {
      alarmIsTriggered = true;
      message = 'Alarm is not Silenced';
    }
    if (alarmIsTriggered === true) {
      return (
        <CardSection style={styles.activeAlarmHeaderContainer}>
          <Text style={styles.headerText}>{message}</Text>
        </CardSection>
      );
    }

    return (

        <CardSection style={styles.disabledAlarmHeaderContainer}>
          <Text style={styles.headerText}>{message}</Text>
        </CardSection>

    );
  }

  silenceAlarm() {
    console.log('Silencing alarm...');
    this.props.silenceSensorAlarm(this.props.sensor);
  }

  renderSilenceButton() {
    if (
      this.props.sensor.alarmActive === true &&
      this.props.sensor.silenced === false
    ) {
      return (
        <CardSection>
          <Button onPress={this.silenceAlarm.bind(this)}>Silence Alarm</Button>
        </CardSection>
      );
    }
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
      <View>
        <View style={styles.containerStyle}>
          {this.renderDetailsHeader()}

          <CardSection>
            <Text style={styles.titleStyle}>{deviceName}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.titleStyle}>{roomName}</Text>
          </CardSection>
          <CardSection>
            <Text style={styles.textStyle}>Battery:</Text>
            <Text style={this.setBatteryStyle(batteryLevel)}>
              {batteryLevel}%
            </Text>
          </CardSection>
          <CardSection>
            <Text style={this.setBooleanStyle(alarmActive)}>
              {alarmActive ? 'Alarm ON' : 'Alarm OFF'}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={this.setBooleanStyle(online)}>
              {online ? 'Online' : 'Offline'}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={this.setBooleanStyle(silenced)}>
              {silenced ? 'Silenced' : 'Not silenced'}
            </Text>
          </CardSection>
        </View>
        <View>
          {this.renderSilenceButton()}
        </View>
      </View>
    );
  }
}

const styles = {
  activeAlarmHeaderContainer: {
    backgroundColor: 'red',
    height: 80,
    paddingTop: 30,
    justifyContent: 'center'
  },
  disabledAlarmHeaderContainer: {
    backgroundColor: 'green',
    height: 80,
    paddingTop: 30,
    justifyContent: 'center'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  containerStyle: {
    borderColor: 'grey',
    borderBottomWidth: 2
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

const mapStateToProps = state => {
  const { sensor } = state.sensorDetails;

  return { sensor };
};

export default connect(mapStateToProps, { silenceSensorAlarm })(SensorDetails);

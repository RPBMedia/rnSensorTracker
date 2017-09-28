import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import _ from 'lodash';
import { fetchActivities, fetchSensors } from '../actions';
import ActivityListItem from './ActivityListItem';
import SensorListItem from './SensorListItem';
import { CardSection } from './common';

class AlarmList extends Component {
    componentWillMount() {

      this.props.fetchActivities();
      this.props.fetchSensors();
    }


    renderActivityRow(activity) {
      return (
        <ActivityListItem key={activity.date} activity={activity} />
      );
    }

    renderSensorRow(sensor) {
      return (
        <SensorListItem key={sensor.deviceId} sensor={sensor} />
      );

    }


    //For scalability reasons, decided to use two lists, one for each type of data
    //Another solution could be to provide one flatList with the sensors and
    //with a header component that would list the activities
    render() {

      return (
        <View>
          <FlatList
            data={this.props.activities}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              this.renderActivityRow(item)
            )}
          />

          <CardSection style={styles.listHeaderContainer}>
            <Text style={styles.listHeader}>
              Sensors
            </Text>
          </CardSection>
          <FlatList
            data={this.props.sensors}
            keyExtractor={item => item.deviceId}
            renderItem={({item, index}) => (
              this.renderSensorRow(item)
            )}
          />
        </View>
      );
    }
}

const styles = {
  listHeaderContainer: {
    height: 30,
    justifyContent: 'center',
    fontSize: 14,
    paddingTop: 4,
    borderColor: 'black',
    borderWidth: 2,
  },
  listHeader: {
    justifyContent: 'center',
    fontSize: 16,
  }
}

const mapStateToProps = state => {

const { activities, sensors } = state.alarms
  return { activities, sensors };
};

export default connect(mapStateToProps, { fetchActivities, fetchSensors })(AlarmList);

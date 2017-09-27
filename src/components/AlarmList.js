import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import _ from 'lodash';
import { fetchActivities, fetchSensors } from '../actions';
import ActivityListItem from './ActivityListItem';
import SensorListItem from './SensorListItem';

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

const mapStateToProps = state => {

const { activities, sensors } = state.alarms
  return { activities, sensors };
};

export default connect(mapStateToProps, { fetchActivities, fetchSensors })(AlarmList);

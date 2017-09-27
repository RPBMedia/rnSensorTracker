import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ActivityListItem extends Component {

  onRowPress() {
    console.log('Activity pressed');
  }

  setContainerStyle(){
    if(this.props.activity.activity === 'ALARM_TRIGGERED'){
      return styles.dangerActivityItemContainer;
    }
    return styles.activityItemContainer;
  }

  render() {
    const { activity, text, title } = this.props.activity;

    return (
      <TouchableHighlight onPress={this.onRowPress.bind(this)}>
        <View style={this.setContainerStyle()}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>

          <CardSection>
            <Text style={styles.descStyle}>
              {text}
            </Text>
          </CardSection>
        </View>


      </TouchableHighlight>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descStyle: {
    fontSize: 13,
    color: 'grey'
  },
  activityItemContainer: {
    borderColor: 'grey',
    borderBottomWidth: 2,
  },
  dangerActivityItemContainer: {
    backgroundColor: 'orange',
    borderColor: 'black',
    borderBottomWidth: 2,
  }
};

export default ActivityListItem;

import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.cardSectionStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  cardSectionStyle: {
    padding: 5,    
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import mqtt from 'react-native-mqtt';

import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const options = {
      port: 1883,
      auth: false,
      keepalive: 45,
      tls: false,
      selfSignedCertificates: false,
      host: '192.168.1.50', //change to your IP
      clientId: 'test'
    };
    
    mqtt.createClient(options)
      .then(function(client) {
        client.on('closed', function() {
          console.log('mqtt.event.closed');
        });

        client.on('error', function(msg) {
          console.log('mqtt.event.error', msg);
        });

        client.on('message', function(msg) {
          console.log('mqtt.event.message', msg);
        });

        client.on('connect', function() {
          console.log('connected');
          client.subscribe('/data', 0);
          client.publish('/data', 'test', 0, false);
        });

        client.connect();
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

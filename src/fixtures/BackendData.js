export const alarms = {
  activities: [
    {
      activity: 'ALARM_TRIGGERED',
      text: 'Detected in Kitchen - Behind the stove',
      title: 'Smoke detected!',
      date: '2017-09-27T16:44:57.600Z'
    },
    {
      activity: 'ALARM_TRIGGERED',
      text: 'Detected in Kitchen - Behind the stove',
      title: 'Smoke detected!',
      date: '2017-09-27T16:44:10.732Z'
    }
  ],
  sensors: [
    {
      deviceId: 'abc123',
      deviceName: 'Behind the stove',
      roomName: 'Kitchen',
      roomId: 'room1',
      batteryLevel: 65,
      alarmActive: true,
      online: true,
      silenced: false
    },
    {
      deviceId: 'abc124',
      deviceName: 'Underneath the bed',
      roomName: 'Bedroom',
      roomId: 'room2',
      batteryLevel: 32,
      alarmActive: false,
      online: true,
      silenced: false
    },
    {
      deviceId: 'abc125',
      deviceName: 'Behind the sofa',
      roomName: 'Livingroom',
      roomId: 'room3',
      batteryLevel: 98,
      alarmActive: false,
      online: true,
      silenced: false
    }
  ]
};

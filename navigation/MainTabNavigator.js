import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import AppointmentScreen from '../screens/Appointment';
import ContactScreen from '../screens/Contact';
import AboutScreen from '../screens/About';

export default TabNavigator(
  {
    About: {
      screen: AboutScreen,
    },
    Appointment: {
      screen: AppointmentScreen,
    },
    Contact: {
      screen: ContactScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'About':
            iconName = 'ios-paper-outline';
            break; 
          case 'Appointment':
            iconName = 'ios-timer-outline';
            break;
          case 'Contact':
            iconName = 'ios-mail-outline';
            break; 
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/HomeScreen'
import Setting from '../screens/SettingScreen'
import Notification from '../screens/NotificationScreen'
import { Ionicons } from '@expo/vector-icons';

const home = createStackNavigator({
    Dashboard: Home,
    Setting: Setting,
    Notification: Notification
})


const notification = createStackNavigator({
    Notification,
})
const history = createStackNavigator({
    Setting,
})

const BottomNavigator = createBottomTabNavigator({
    Notification: {
        screen: notification, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="md-notifications" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Dashboard: {
        screen: home, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="md-home" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    History: {
        screen: history, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="md-time" size={25} color={tabInfo.tintColor} />
            }
        }
    },

}, {
    initialRouteName: 'Dashboard',
})

const sideBar = createDrawerNavigator({
    BottomNavigator,
    Notification: notification,
    Dashboard: home,
    History: history,
});


export default createAppContainer(sideBar)
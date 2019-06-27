import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import DetailsScreen from './src/screens/DetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import store from './src/store';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      headerTitle: "Home",
      headerStyle: {
        backgroundColor: '#1C1C1C',
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  },

  List: {
    screen: ListScreen,
    navigationOptions:{
      headerTitle: "Lista de Lançamentos",
      headerStyle: {
        backgroundColor: '#1C1C1C',
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  },

  Details: {
    screen: DetailsScreen,
    navigationOptions:{
      headerTitle: "Detalhes",
      headerStyle: {
        backgroundColor: '#1C1C1C',
      },
      headerTitleStyle: {
        color: 'white'
      },
    }
  
  },
}, {
    initialRouteName: 'Home',
}, );


export default createAppContainer( AppNavigator);
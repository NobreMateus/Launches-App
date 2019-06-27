import React, { Component } from 'React';
import { View, Button, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';  
import store from '../store/index'
import LaunchesList from '../components/launchesList'

export default class ListScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Provider store={store}>
                <LaunchesList />
            </Provider>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });
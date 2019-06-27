import React, { Component } from 'React';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';  
import store from '../store/index'
import LaunchesList from '../components/launchesList'

export default class DetailisScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Text> Detalhes de Lançamento </Text>
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
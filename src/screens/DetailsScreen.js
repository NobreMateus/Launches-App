import React, { Component } from 'React';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';  
import DetailsInfo from '../components/DetailsInfo';
import store from '../store/index';

export default class DetailisScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Text> Detalhes de Lançamento </Text>
            <Provider store={store}>
                <DetailsInfo />
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
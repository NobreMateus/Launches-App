import React, { Component } from 'React';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';  
import DetailsInfo from '../components/DetailsInfo';
import store from '../store/index';

export default class DetailisScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Provider store={store}>
                <DetailsInfo navigation ={this.props.navigation} />
            </Provider>      
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
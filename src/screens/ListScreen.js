import React, { Component } from 'React';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import { Provider } from 'react-redux';  
import store from '../store/index';
import LaunchesList from '../components/launchesList';
import SearchField from '../components/SearchField';
import PageButtons from '../components/PageButtons'

export default class ListScreen extends Component {
    
    
    
    render(){
        return(
        <View style={styles.container}> 
            <Provider store={store}>
                <SearchField  />
                <LaunchesList navigation= {this.props.navigation}/>
                <PageButtons /> 
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
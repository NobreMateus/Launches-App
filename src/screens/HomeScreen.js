import React, { Component } from 'React';
import { View, Button, StyleSheet } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


export default class HomeScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Button 
                title = "Ver Lançamentos"
                onPress = {()=>{
                    this.props.navigation.navigate('Details')
                }}
            />
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
  
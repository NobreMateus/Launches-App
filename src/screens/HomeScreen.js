import React, { Component } from 'React';
import { View, Button, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


export default class HomeScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            
            <Image
                style={{
                backgroundColor: '#ccc',
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                }}
                source={require('../../assets/Screen1.png')} 
            />
            <View style={styles.container2}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {()=>{
                        this.props.navigation.navigate('List')
                    }}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={{color:'white', fontSize:20}}>VER LANÇAMENTOS</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
    },
    container2: {
        flex: 1,
        paddingBottom: 100,
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#1C1C1C',
        width: 0.8*Dimensions.get('window').width,
        height: 0.1*Dimensions.get('window').height,
        color: 'white',
        borderRadius: 5   
    },
    buttonContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  
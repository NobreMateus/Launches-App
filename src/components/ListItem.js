import React, { Component } from 'React';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';

export default class ListItem extends Component {

    render(){
        return(
            <View style = {styles.item}>
                <View style = {styles.container}>
                    <Text style = { styles.textTitle } >{this.props.info.mission_name}</Text>
                    <Text style = { styles.infoText }>{this.props.info.rockets.rocket_name} - {this.props.info.launch_date_local}</Text>                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        // flexDirection: 'row',
        // borderWidth: 0.5,
        // borderColor: '#1C1C1C',
        // justifyContent: 'space-between'
    },
    textTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    infoText:{
        color: 'white',
        fontSize: 16,
    },

    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#1C1C1C',
        
        fontSize: 20,
        height: 80,
        width: Dimensions.get('window').width,
        color: 'white'
    }
})
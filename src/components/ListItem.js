import React, { Component } from 'React';
import { View, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectLaunch } from "../actions/index";

export class ListItem extends Component {

    render(){
        return(
            <TouchableOpacity style = {styles.item}
                onPress={()=> {
                    this.props.selectLaunch(this.props.info.mission_name)
                    this.props.navigation.navigate('Details')
                }}
            >
                <View style = {styles.container}>
                    <Text style = { styles.textTitle } >{this.props.info.mission_name}</Text>
                    <Text style = { styles.infoText }>{this.props.info.rockets.rocket_name} - {this.props.info.launch_date_local}</Text>                
                </View>
                <View style = {styles.container2}>   
                    <Icon  
                        name='keyboard-arrow-right'
                        color='white'  
                        size = {32}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

export default connect(
    state => ({ launches: state }),
    {selectLaunch}
  )(ListItem);

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center', 
    },
    container2: {
        flex: 1,
        justifyContent: 'center', 
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
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#1C1C1C',
        
        fontSize: 20,
        height: 80,
        width: Dimensions.get('window').width,
        color: 'white'
    }
})
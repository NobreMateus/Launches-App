import React, { Component } from 'React';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ListItem from './ListItem';
import * as Launches from '../services/Launches';
import { updateLaunches } from "../actions/index";


export class LaunchesList extends Component {

    componentWillMount(){
        Launches.getAllLaunches().then((l)=>{
            console.log(l.data)
            this.props.updateLaunches(l.data);
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList
                  data={this.props.launches}
                  renderItem={({item}) => <ListItem info={item} navigation={this.props.navigation}  />}
                />
            </View>
        )       
    }
}

export default connect(state => ({ launches: state.launches }), {updateLaunches}) (LaunchesList);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
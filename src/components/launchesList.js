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
                {this.props.ready?null:<Text style={{color:'white'}}>Carregando...</Text>}
                <FlatList
                  data={this.props.launches.slice(
                      this.props.page * this.props.qItemsPage, 
                      (this.props.page * this.props.qItemsPage) + this.props.qItemsPage 
                )} 
                  renderItem={({item}) => <ListItem info={item} navigation={this.props.navigation}  />}
                />
            </View>
        )       
    }
}

export default connect(state => ({ launches: state.filteredLaunches, page: state.page, qItemsPage: state.qItemsPage, ready: state.ready }), {updateLaunches}) (LaunchesList);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
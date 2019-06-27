import React, { Component } from 'React';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ListItem from './ListItem';


const LaunchesList = ({launches, dispatch}) => {

    return(
    <View style={styles.container}>
        <FlatList
          data={launches}
          renderItem={({item}) => <ListItem info={item} />}
        />
    </View>
)}

export default connect(state => ({ launches: state })) (LaunchesList);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22
    }
})
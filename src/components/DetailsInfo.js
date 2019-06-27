import React, { Component } from 'React';
import { View, StyleSheet, Text } from 'react-native';
import VideoPlayerDetails from './VideoPlayerDetails';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import store from '../store/index';

const DetailsInfo = ({selectedLaunch, dispatch}) => {

    return(
    <View style={styles.container}> 
        {/* <VideoPlayerDetails /> */}
        <Text> {selectedLaunch} </Text> 
    </View>
)}

export default connect(state => ({ selectedLaunch: state.selectedLaunch })) (DetailsInfo);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})
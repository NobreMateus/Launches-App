import React, { Component } from 'React';
import { View, StyleSheet, Text, WebView } from 'react-native';
import VideoPlayerDetails from './VideoPlayerDetails';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import store from '../store/index';
import { Button } from 'react-native-elements';

const DetailsInfo = ({selectedLaunch, dispatch}) => {

    return(
        //actions.selectLaunch.links.article_link
    <View style={styles.container}> 
        {/* <VideoPlayerDetails /> */}
        {console.log(selectedLaunch)}
        <Text style={styles.bigText}> 
            Nome da Missão: {selectedLaunch.mission_name} 
        </Text>
        <Text style={styles.smallText}>
            Detalhes da Missão: {selectedLaunch.details} 
            Nome do Foguete: {selectedLaunch.rocket.rocket_name}
            Data de Lançamento: {new Date(selectedLaunch.launch_date_utc).toLocaleDateString()}
        </Text>
        <Button
            title="Ver Artigo"
            onPress={()=>{}} 
        />
    </View>
)}

export default connect(state => ({ selectedLaunch: state.selectedLaunch })) (DetailsInfo);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bigText:{
        fontSize: 26
    },
    smallText:{
        fontSize: 22
    }
})
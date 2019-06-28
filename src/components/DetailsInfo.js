import React, { Component } from 'React';
import { View, StyleSheet, Text, WebView, ScrollView, TouchableOpacity, Dimensions, Button  } from 'react-native';
import VideoPlayerDetails from './VideoPlayerDetails';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import store from '../store/index';

export class DetailsInfo extends Component {
    render(){
     return(
        //actions.selectLaunch.links.article_link
        <ScrollView  style={styles.container}> 
            {/* <VideoPlayerDetails /> */}
            <Text style={styles.titleText}>Nome da Missão: </Text> 
            <Text style={styles.text}>{this.props.selectedLaunch.mission_name}</Text>
            <Text style={styles.titleText}>Detalhes da Missão:</Text>
            <Text style={styles.text}>{this.props.selectedLaunch.details}</Text> 
            <Text style={styles.titleText}>Nome do Foguete:</Text>
            <Text style={styles.text}>{this.props.selectedLaunch.rocket.rocket_name} </Text>
            <Text style={styles.titleText}>Data de Lançamento:</Text>
            <Text style={styles.text}>{new Date(this.props.selectedLaunch.launch_date_utc).toLocaleDateString()} </Text>
            
            <Button
                title="Ver Artigo"
                color="#1C1C1C"
                disabled = {this.props.selectedLaunch.links.article_link?false:true}
                onPress={()=>{this.props.navigation.navigate('ArticleView', {uri: this.props.selectedLaunch.links.article_link })}} 
            />
        </ScrollView >
        )
    }
}

// export default connect(state => ({ selectedLaunch: state.selectedLaunch })) (DetailsInfo);


export default connect(
    state => ({ selectedLaunch: state.selectedLaunch })
  )(DetailsInfo);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:15
    },
    titleText:{
        fontSize:20,
        color: 'grey'
    },
    text:{
        fontSize: 18,
        color:'white',
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey'
    },
    button:{
        backgroundColor: '#1C1C1C',
        width: 0.8*Dimensions.get('window').width,
        height: 0.1*Dimensions.get('window').height,
        color: 'white',
        borderRadius: 5
    }
})
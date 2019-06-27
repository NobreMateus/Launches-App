import React, { Component } from 'React';
import { View, StyleSheet } from 'react-native';
// import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import YouTube from 'react-native-youtube';


export default class VideoPlayerDetails extends Component {
    
    state = {
        height: 215 
    }

    styles = StyleSheet.create({
        container:{ flex: 1, justifyContent: "center", backgroundColor:'red'},
        backgroundVideo: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
      });

    handleReady = () => {
        setTimeout(() => this.setState({ height: 216 }), 500);
    }

    render(){


        return(
            <View style={{ flex: 1, justifyContent: "center", backgroundColor:'red'}}>
                        <YouTube
                            apiKey = "AIzaSyD_etlP6e7Uv1W-z-qYTAErlca_n4Q62jg"
                            videoId="KVZ-P-ZI6W4"
                            ref      = {item => this.player = item}
                            play={false}             // control playback of video with true/false
                            fullscreen={false}       // control whether the video should play in fullscreen or inline
                            onReady  = {this.handleReady}
                            controls = {1}
                            style    = {{ alignSelf: 'stretch', height: this.state.height }}
                            />
            </View>
        )
    }

    
}

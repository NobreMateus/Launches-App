import React, { Component } from 'React';
import { View, Button, Text, StyleSheet, WebView } from 'react-native';
import { Provider } from 'react-redux';  
import DetailsInfo from '../components/DetailsInfo';
import store from '../store/index';
import { connect } from 'react-redux';

export class ArticleView extends Component {
    render(){

        console.log(this.props.launches.links.article_link)

        return(
            
        <WebView 
            source={{uri: this.props.launches.links.article_link}}
            style={{marginTop: 20}}
        />  
        )
    }
}

export default connect(state => ({ launches: state.selectedLaunch }))(ArticleView)

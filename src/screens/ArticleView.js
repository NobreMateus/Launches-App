import React, { Component } from 'React';
import { View, Button, Text, StyleSheet, WebView } from 'react-native';
import { Provider } from 'react-redux';  
import DetailsInfo from '../components/DetailsInfo';
import store from '../store/index';
import { connect } from 'react-redux';

export default class ArticleView extends Component {
    render(){

        return(
            
        <WebView 
            source={{uri: this.props.navigation.getParam('uri')}}
        />  
        )
    }
}


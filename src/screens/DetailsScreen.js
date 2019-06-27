import React, { Component } from 'React';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class DetailisScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Text> Detalhes de Lançamento </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
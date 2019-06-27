import React, { Component } from 'React';
import { View, Button, StyleSheet } from 'react-native';

export default class ListScreen extends Component {
    render(){
        return(
        <View style={styles.container}> 
            <Button 
                title = "Ver Detalhes"
            />
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
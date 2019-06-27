import React, { Component } from 'React';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

const LaunchesList = ({launches, dispatch}) => {
    

    return(
    
    <View>

        {launches.map((t)=>
                
            <View key={t.flight_number} styles={style.container}>
                <Text>Teste {t.mission_name}</Text>
                <Text>Teste {t.mission_name}</Text>
                <Button
                    title="Botao"
                    onPress = {()=> dispatch(actions.aumenta(34)) }
                />
            </View>
        
        )}
    
    </View>
)}

export default connect(state => ({ launches: state })) (LaunchesList);

const style = StyleSheet.create({
    container:{
        color: "red"
    }
})
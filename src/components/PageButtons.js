import React, { Component } from 'React';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { changePage } from '../actions/index';

const PageButtons = ({qItems, page, dispatch}) => {

    return (
        <View style = {styles.container}>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={()=>{ dispatch(changePage('prev')) }}
                >
                    <Icon  
                                name='skip-previous'
                                color='white'  
                                size = {34}
                            />
                </TouchableOpacity>

                    <Text style={{color:'white', fontSize:20, margin: 10}}>{page+1} / {Math.ceil(qItems/10)} </Text>

                <TouchableOpacity
                    onPress={()=>{ dispatch(changePage('next')) }}
                >
                    <Icon  
                                name='skip-next'
                                color='white'  
                                size = {34}
                            />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderTopColor: 'grey',
        width: Dimensions.get('window').width,
        justifyContent: 'center'
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    }
})
 
export default connect(state => ({ qItems: state.filteredLaunches.length, page: state.page  })) (PageButtons);
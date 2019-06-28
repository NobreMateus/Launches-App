import React from 'React';
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { filterList } from '../actions/index';

const SearchField = ({launches, dispatch}) => {

    return (
        <View>
            <TextInput
                style = {styles.textfield}
                placeholder = "Procurar..."
                onChange = {(t)=>dispatch(filterList(t.nativeEvent.text))} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textfield:{
        width: Dimensions.get('window').width,
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 12,
        color: 'white'
    }
})

export default connect(state => ({ launches: state })) (SearchField);
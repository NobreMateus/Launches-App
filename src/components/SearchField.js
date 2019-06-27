import React from 'React';
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { connect } from 'react-redux';

const SearchField = ({launches, dispatch}) => {

    return (
        <View>
            <TextInput
                style = {styles.textfield}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textfield:{
        width: Dimensions.get('window').width,
        borderColor: 'gray', 
        borderWidth: 1,
        height: 22
    }
})

export default connect(state => ({ launches: state })) (SearchField);
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

const Clickable = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 6,
        margin: 5,
        padding: 3,
        borderRadius: 6,
        borderColor: '#fff',
        borderWidth: 1,
        alignSelf: 'flex-start'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default Clickable
import React from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput style={styles.input} placeholder='Search'/>
                <View style={styles.searchbutton}><Icon style={styles.navicon} name="search" size={30} color="#fff" /></View>
                <View style={styles.button}><Icon style={styles.navicon} name="camera" size={30} color="#fff" /></View>
                <View style={styles.button}><Icon style={styles.navicon} name="star" size={30} color="#fff" /></View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row-reverse',
        padding: 10,
        
    },
    search: {
        color: '#fff',
        display: 'flex',
        flexDirection: 'row'

    },
    input: {
        width: '50%',
        borderWidth: 1,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        padding: 3,
        paddingLeft: 10,
        borderColor: '#D3D3D3'
    },
    searchbutton: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        width: 40,
        height: '100%',
        backgroundColor: '#D3D3D3',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        paddingTop: 4,
        paddingLeft: 3,
        marginRight: 3,
    },
    button: {
        borderWidth: 1,
        borderColor: '#D3D3D3',
        width: 40,
        height: '100%',
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        paddingTop: 4,
        paddingLeft: 4,
        marginRight: 3,

    }
})

export default Search
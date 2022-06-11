import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';


import Clickable from './GenreClickable'

const Genre = () => {
    return(
        <ScrollView style={styles.container} horizontal={true}>
            <Clickable text={'Electronics'}/>
            <Clickable text={'Computers'}/>
            <Clickable text={'Processors'}/>
            <Clickable text={'Cellphones'}/>
            <Clickable text={'Video Cards'}/>
            <Clickable text={'Installers'}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '92%',
        backgroundColor: '#D3D3D3',
        flex: 1,
        height: 40,
    }

})

export default Genre
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';


import Clickable from './GenreClickable'

const Genre = () => {
    return(
        <ScrollView style={styles.container} horizontal={true}>
            <Clickable text={'Teens'}/>
            <Clickable text={'HomeMade'}/>
            <Clickable text={'MILF'}/>
            <Clickable text={'Asian'}/>
            <Clickable text={'Petite'}/>
            <Clickable text={'Step Daddy'}/>
            <Clickable text={'Daughter'}/>
            <Clickable text={'Sis'}/>
            <Clickable text={'Indian'}/>
            <Clickable text={'Family Swap'}/>
            <Clickable text={'Busty'}/>
            <Clickable text={'PWAG'}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '93%',
        backgroundColor: '#D3D3D3',
        flex: 1,
        height: 40,
    }

})

export default Genre
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Content = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>

            </View>
            <View style={styles.interaction}>
                <View style={styles.intActivity}>
                    <Text style={styles.intText}> <Icon style={styles.navicon} name="like2" size={20} color="#D3D3D3" /> </Text>
                </View>
                <View style={styles.intActivity}>
                    <Text style={styles.intText}> <Icon style={styles.navicon} name="dislike2" size={20} color="#D3D3D3" /> </Text>
                </View>
                <View style={styles.intActivity}>
                    <Text style={styles.intText}> <Icon style={styles.navicon} name="codesquareo" size={20} color="#D3D3D3" /> </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '90%',
        height: 300,
        marginLeft: 5,
        marginRight: -600,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: 8,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: '#D3D3D3',
    },
    interaction: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D3D3D3',
    },
    intActivity: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        alignItems: 'center', //Centered vertically
        justifyContent: 'center', //Centered horizontally
 
    },
    intText: {
        color: '#D3D3D3',
        fontWeight: 'bold',
    }
})

export default Content
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Content = () => {
    const [hot, setHot] = useState(0);
    const [not, setNot] = useState(0);

    return(
        <View style={styles.container}>
            <View style={styles.content}>

            </View>
            <View style={styles.interaction}>
                <Pressable style={styles.intActivity}
                    onPress={() => {
                        setHot((hot) => hot + 1)
                    }}
                >
                    <Text style={styles.intText}> <Icon style={styles.navicon} name="fire" size={20} color="#D3D3D3" /> {hot} Hot</Text>
                </Pressable>
                <Pressable style={styles.intActivity}
                    onPress={() => {
                        setNot((not) => not + 1)
                    }}
                >
                    <Text style={styles.intText}> <Icon style={styles.navicon} name="shield" size={20} color="#D3D3D3" /> {not} Not</Text>
                </Pressable>
                <View style={styles.intActivity}>
                    <Text style={styles.intText}> <Icon style={styles.navicon} name="menu" size={20} color="#D3D3D3" /> </Text>
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
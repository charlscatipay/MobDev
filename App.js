import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Search from './components/Search'
import Genre from './components/Genre'
import Content from './components/Content'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator> */}
      <SafeAreaView style={styles.container}>
        {/* Head */}
        <View style={styles.head}> 
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          </Drawer.Navigator>
          <Text style={styles.logo}>FUCBUC</Text>
          <View style={styles.circle}><Icon name="user" size={45} color="#fff" /></View>
        </View>
        {/* End of Head */}

        {/* Body */}
        <ScrollView style={styles.body}>
            <Search style={styles.pos} />
            <Genre/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </ScrollView>
        {/* End of Body */}

        {/* Footer */}
        {/* <View style={styles.footer}>

        </View> */}
        {/* End of Footer */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginRight: -27,
  },
  head: {
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    height: 60,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: 55,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#D3D3D3'
  },
  logo: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
   },
   square: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    margin: 10,
   },
   circle: {
    paddingTop: 2,
    width: 40,
    height: 40,
    margin: 10,
    borderRadius: 40,
   },
   navicon: {
    marginLeft: -5,
   },
});

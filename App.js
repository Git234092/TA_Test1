/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button,Touchable,TouchableOpacity, TextInput, Alert,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */ 

const App = () =>  {

  const Stack = createNativeStackNavigator();

  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName = 'SignIn'>
      <Stack.Screen name='SingIn' component={PageOne} />

      <Stack.Screen name='Home' component={PageTwo}/>
    </Stack.Navigator>
  </NavigationContainer>
)};
export default App;


import React from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import theme from './src/global/styles/theme';
import { SignIn } from './src/screens/SignIn';
import { StatusBar, StyleSheet } from 'react-native';

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (

    <ThemeProvider theme={theme}>    
      <StatusBar 
        // barStyle="light-content"
        // translucent
        // backgroundColor="transparent" 
      />
      <AuthProvider>
        <SafeAreaView style={styles.container}> 

          <Routes />
        </SafeAreaView>

      </AuthProvider>
    </ThemeProvider>

    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500'
  }
})
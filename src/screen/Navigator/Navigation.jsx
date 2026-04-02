import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WelcomeScreen from '../Common/WelcomeScreen';
import LoginScreen from '../Common/LoginScreen';
import DashboardScreen from '../Common/DashboardScreen';
import JobDetailsScreen from '../Common/JobDetailsScreen';
import ManualSelectionForm from '../Common/ManualSelectionForm';



const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <SafeAreaProvider >

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
       <Stack.Screen name="LoginScreen" component={LoginScreen} />
       <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
       <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen} />
       <Stack.Screen name="ManualSelectionForm" component={ManualSelectionForm} />
      </Stack.Navigator>

    </SafeAreaProvider>


  );
};

export default Navigation;
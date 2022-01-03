import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { MaterialIcons, Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../screens/Home';
import { Indication } from '../screens/Indication';
import { Award } from '../screens/Award';
import { Notification } from '../screens/Notification';
import { Profile } from '../screens/Profile';

import { ButtonPlus } from '../components/ButtonPlus';

export function AppRoutes(){
  const theme = useTheme();
  return(
    <Navigator

      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        // tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 55
        }
      }}
    >
      <Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="home"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Bonificações"
        component={Award}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather 
              name="award"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Indicar"
        component={Indication}
        options={{
          tabBarIcon: (({ size, color }) => (
            <ButtonPlus 
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Notificações"
        component={Notification}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons 
              name="notifications"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Feather 
              name="user"
              size={size}
              color={color}
            />
          ))
        }}
      />

    </Navigator>
  );
}
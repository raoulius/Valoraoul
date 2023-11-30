import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Main_Screen from './pages/MainScreen';
import AboutPage from './pages/AboutPage';
import Profil from './pages/ProfilScreen';
import DetailScreen from './pages/detailScreen';
import AgentsScreen from './pages/AgentScreen';
import GameModesScreen from './pages/GameModesScreen';
import GameModeDetail from './pages/GameModesDetail';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name=" " component={Main_Screen} options={{

      headerStyle: {
        backgroundColor: '#FD4556',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0 // Set the background color of the header
      },
      headerTintColor: 'black',
    }} />
    <Stack.Screen name="DetailScreen" component={DetailScreen} ooptions={{

      headerStyle: {
        backgroundColor: '#FD4556',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0 // Set the background color of the header
      },
      headerTintColor: 'black',
    }} />
    <Stack.Screen name="AgentScreen" component={AgentsScreen} options={{

      headerStyle: {
        backgroundColor: '#FD4556',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0 // Set the background color of the header
      },
      headerTintColor: 'black',
    }} />
    <Stack.Screen name="GameModesScreen" component={GameModesScreen} options={{

      headerStyle: {
        backgroundColor: '#FD4556',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0 // Set the background color of the header
      },
      headerTintColor: 'black',
    }} />
    <Stack.Screen name="GameModeDetailScreen" component={GameModeDetail} options={{

      headerStyle: {
        backgroundColor: '#FD4556',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0 // Set the background color of the header
      },
      headerTintColor: 'black',
    }} />
     
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle:{
            elevation:0,
          },
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: '#FD4556',
          tabBarActiveTintColor: '#FD4556',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Wiki') {
              iconName = 'ios-home';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            } else if (route.name === 'About') {
              iconName = 'ios-information-circle';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

      >
        <Tab.Screen name="Wiki" component={MainStack} />
        <Tab.Screen name="About" component={AboutPage} />
        <Tab.Screen name="Profile" component={Profil} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
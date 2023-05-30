import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyClass from "../screens/MyClass";
import Addons from "../screens/Addons";
import Explore from "../screens/Explore";
import Profile from "../screens/Profile";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                     position: 'absolute',
                 },

            }}
        >
            <Tab.Screen
                name="MyClass"
                component={MyClass}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                      ),
                }}
            />
            <Tab.Screen
                name="Addons"
                component={Addons}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="google" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explores"
                component={Explore}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="explore" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile"  
                component={Profile}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="profile" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigator;
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../screens/Bottom/Profile";
import Explore from "../screens/Bottom/Explore";
import MyClass from "../screens/Bottom/MyClass";
import Addons from "../screens/Bottom/Addons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                     position: 'absolute',
                 },
                 headerStyle: {
                    backgroundColor: "#187BCD",
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: {
                    fontWeight: "bold",
                  },

            }}
        >
            <Tab.Screen
                name="MyClass"
                component={MyClass}
                options={{
                    // tabBarIcon: ({ color, size }) => (
                    //     <MaterialCommunityIcons name="zodiac-sagittarius" color={color} size={size} />
                    //   ),
                }}
            />
            <Tab.Screen
                name="Addons"
                component={Addons}
                options={{
                    // tabBarIcon: ({color, size}) => (
                    //     <MaterialCommunityIcons name="rocket" color={color} size={size} />
                    // ),
                }}
            />
            <Tab.Screen
                name="Explores"
                component={Explore}
                options={{
                    // tabBarIcon: ({color, size}) => (
                    //     <MaterialCommunityIcons name="compass-outline" color={color} size={size} />
                    // ),
                }}
            />
            <Tab.Screen 
                name="Profile"  
                component={Profile}
                options={{
                    // tabBarIcon: ({color, size}) => (
                    //     <MaterialCommunityIcons name="rocket" color={color} size={size} />
                    // ),
                    
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigator;
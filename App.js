import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/screen/Home';
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reactify-Teaching-App">
        <Stack.Screen name="Reactify-Teaching-App"
          component={Home}
          options={{
            headerShown: false
          }} />
        <Stack.Screen name="About" component={About} options={{
          headerTitle: "About",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
          },
        }} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitle: "Student",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 30,
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

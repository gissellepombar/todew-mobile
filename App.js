import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TaskList from './src/TaskList';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState();

  return (
    <NavigationContainer>
        <StatusBar style="auto" />
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home'
                    component={TaskList}
                    tasks={tasks}
                    setTasks={setTasks} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
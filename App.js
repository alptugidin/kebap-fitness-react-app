import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from 'app/pages/Welcome';
import SignUp from 'app/pages/SignUp';
import Result from 'app/pages/Result';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

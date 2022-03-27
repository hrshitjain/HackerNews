import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import * as screenNames from '../navigation/ScreenNames';
import HeadLinesScreen from '../screens/HeadlinesScreen';
import CommentsScreen from '../screens/CommentsScreen';
import React from 'react';

enableScreens(true);
const Stack = createNativeStackNavigator();

function RootNavigator() {
    return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName={screenNames.HeadLinesScreen}
                           screenOptions={{gestureEnabled: false, title: 'Head lines'}}>
              <Stack.Screen name={screenNames.HeadLinesScreen}
                            component={HeadLinesScreen}/>
              <Stack.Screen name={screenNames.CommentsScreen}
                            component={CommentsScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default RootNavigator;
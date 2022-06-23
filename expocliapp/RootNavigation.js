import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailsScreen,
  Chat,
  Notification,
  SavedScreen,
  Profile,
} from "./src/screens/index";
import TabBar from "./src/Navigator/TabBar";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={TabBar} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="SavedScreen" component={SavedScreen} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigation;

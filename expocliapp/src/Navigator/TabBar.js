import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SavedScreen from "../screens/SavedScreen";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import { COLORS, images, SHADOWS, SIZES } from "../../constant";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          style: {
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            backgroundColor: COLORS.white,
            height: 100,
            ...SHADOWS.dark,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,

            tabBarIcon: ({ isFocused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={images.search01}
                  style={{ width: 15, height: 15 }}
                />
                <Text style={{ fontSize: SIZES.small }}>Explore</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ isFocuses }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={images.heart01}
                  style={{ width: 15, height: 15 }}
                />
                <Text style={{ fontSize: SIZES.small }}>Saved</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ isFocuses }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image source={images.bell} style={{ width: 15, height: 15 }} />
                <Text style={{ fontSize: SIZES.small }}>Notifications</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ isFocuses }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image source={images.chat} style={{ width: 15, height: 15 }} />
                <Text style={{ fontSize: SIZES.small }}>Chat</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ isFocuses }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image source={images.user} style={{ width: 15, height: 15 }} />
                <Text style={{ fontSize: SIZES.small }}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabBar;

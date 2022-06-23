import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { images, COLORS, SIZES } from "../../constant";
import User from "./User";import {
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic,
  useFonts,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";

const ProfileHeader = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <View
        style={{
          padding: SIZES.medium,
          marginTop: SIZES.extraLarge,
          paddingTop: SIZES.extraLarge,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View styl={{ marginTop: SIZES.medium }}>
          <Text
            style={{
              color: COLORS.secondary,
              fontSize: SIZES.medium,
              fontWeight: "600",
              marginLeft: SIZES.base,
              marginTop: SIZES.base,
            }}
          >
            {!user && <User />}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ width: SIZES.superlarge, height: SIZES.superlarge }}
            onAccessibilityTap={true}
          >
            <Image
              source={images.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
            <Image
              source={images.badge}
              resizeMode="contain"
              style={{
                width: 15,
                height: 15,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

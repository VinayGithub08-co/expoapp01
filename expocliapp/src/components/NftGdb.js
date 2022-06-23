import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, images, SHADOWS } from "../../constant";
import { CircleButton, Creators } from "./SubInfo";
import {
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

const NftGdb = ({ db }) => {
  let [fontsLoaded] = useFonts({
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
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <View>
        <TouchableOpacity
          style={{
            width: 150,
            height: 200,
            backgroundColor: COLORS.white,
            ...SHADOWS.medium,
            borderRadius: SIZES.medium,
            flex: 1,
            marginRight: SIZES.medium,
          }}
        >
          <Image
            source={db.image}
            style={{ width: "100%", height: 100, borderRadius: SIZES.medium }}
          />
          <CircleButton right={10} top={10} />
          <View
            style={{
              flexDirection: "row",
              paddingVertical: SIZES.medium,
              marginLeft: SIZES.base,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              {db.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: SIZES.base,
              marginLeft: SIZES.base,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.base,
                color: COLORS.gray,
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              {db.creator}
            </Text>
          </View>
          <View style={{ marginBottom: SIZES.base, marginLeft: SIZES.base }}>
            <Text
              style={{
                fontSize: SIZES.base,
                fontFamily: "OpenSans_600SemiBold",
                color: COLORS.secondary,
              }}
            >{`$:${db.price}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NftGdb;

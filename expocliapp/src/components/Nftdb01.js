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

const Nftdb01 = ({ db01 }) => {
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
  const navigation = useNavigation();
  return (
    <>
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            width: 300,
            height: 200,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.base,
            ...SHADOWS.light,
          }}
        >
          <Image
            source={db01.image}
            style={{
              width: "100%",
              height: 100,
              borderRadius: SIZES.base,
            }}
          />
          <CircleButton top={10} right={10} />
          <Creators />
          <View style={{ flexDirection: "column" }}>
            <View>
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: "OpenSans_600SemiBold",
                }}
              >
                {db01.name}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: SIZES.base,
                color: COLORS.gray,
              }}
            >
              {db01.creator}
            </Text>
            <Text
              style={{
                fontFamily: "OpenSans_600SemiBold",
                fontSize: SIZES.base,
                color: COLORS.gray,
              }}
            >{`$:${db01.price}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Nftdb01;

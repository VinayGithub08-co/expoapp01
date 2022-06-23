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

const NftCard = ({ data }) => {
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
      <View style={{ marginTop: SIZES.base }}>
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
          activeOpacity={0.5}
          onPress={() => navigation.navigate("DetailsScreen")}
        >
          <Image
            source={data.image}
            style={{ width: "100%", height: 100, borderRadius: SIZES.base }}
          />
          <CircleButton right={10} top={10} />
          <Creators />
          <View
            style={{
              flex: 1,
              marginVertical: SIZES.large,
              flexDirection: "column",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: SIZES.base,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: "OpenSans_600SemiBold",
                }}
              >
                {data.name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginVertical: SIZES.base,
                marginLeft: SIZES.base,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.small,
                  color: COLORS.gray,
                  fontFamily: "OpenSans_600SemiBold",
                }}
              >
                {data.creator}
              </Text>

              <Text
                style={{
                  fontSize: SIZES.font,
                  fontFamily: "OpenSans_600SemiBold",
                  color: COLORS.secondary,
                  marginBottom: SIZES.base,
                }}
              >{`$:${data.price}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NftCard;

import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { COLORS, SIZES, images } from "../../constant";
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

const HomeHeader = () => {
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
  const [searchNft, setSearchNft] = useState("");

  return (
    <>
      <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.medium }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.base,
            backgroundColor: COLORS.transparent,
            flexDirection: "row",
            paddingHorizontal: SIZES.extraLarge,
            paddingVertical: SIZES.small,
          }}
        >
          <Image
            source={images.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.font,
            }}
          />
          <TextInput
            placeholder="search Nfts"
            style={{
              flex: 1,
              fontSize: SIZES.font,
              fontWeight: "600",
              fontFamily: "OpenSans_600SemiBold",
            }}
            onChangeText={(nft) => setSearchNft(nft)}
            value={searchNft}
          />
        </View>
      </View>
    </>
  );
};

export default HomeHeader;

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

const HomeHeader = () => {
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

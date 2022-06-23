import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, images, SHADOWS } from "../../constant";
import { CircleButton, Creators } from "./SubInfo";

const Nftdb01 = ({ db01 }) => {
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
                  fontWeight: "600",
                }}
              >
                {db01.name}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: SIZES.base,
                color: COLORS.gray,
              }}
            >
              {db01.creator}
            </Text>
            <Text
              style={{
                fontWeight: "600",
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

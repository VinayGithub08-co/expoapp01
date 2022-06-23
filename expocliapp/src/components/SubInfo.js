import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, images, SHADOWS } from "../../constant";

export const CircleButton = ({ handlePress, ...props }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.extraLarge,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          ...SHADOWS.light,
          ...props,
        }}
        onPress={handlePress}
      >
        <Image source={images.heart} style={{ width: 10, height: 10 }} />
      </TouchableOpacity>
    </>
  );
};

export const Creators = () => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          bottom: 90,
          left: 0,
        }}
      >
        <Image
          source={images.person02}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
        <Image
          source={images.person03}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
        <Image
          source={images.person04}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

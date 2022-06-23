import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, images, SHADOWS } from "../../constant";
import { CircleButton, Creators } from "./SubInfo";

const NftGdb = ({ db }) => {
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
                fontWeight: "600",
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
                fontWeight: "600",
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

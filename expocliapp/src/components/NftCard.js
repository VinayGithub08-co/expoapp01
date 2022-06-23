import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, images, SHADOWS } from "../../constant";
import { CircleButton, Creators } from "./SubInfo";

const NftCard = ({ data }) => {
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
                  fontWeight: "600",
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
                  fontWeight: "600",
                }}
              >
                {data.creator}
              </Text>

              <Text
                style={{
                  fontSize: SIZES.font,
                  fontWeight: "600",
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

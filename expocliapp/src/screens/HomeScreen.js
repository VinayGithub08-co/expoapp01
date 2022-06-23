import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
} from "react-native";
import {
  HomeHeader,
  ProfileHeader,
  Categories,
  NftCard,
  NftGdb,
  Nftdb01,
} from "../components";
import { SIZES, NFTData, NFTGamingdb, COLORS, Nftdbb } from "../../constant";
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

const HomeScreen = () => {
  const [Nft, setNft] = useState(NFTData);
  const [Nftdb, setNftdb] = useState(NFTGamingdb);
  const [NftDbb, setNftdbb] = useState(Nftdbb);
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
      <View style={styles.HomeContainer}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginBottom: SIZES.base }}
        >
          <ProfileHeader />
          <HomeHeader />
          <Categories />

          <View
            style={{ marginTop: SIZES.small, marginHorizontal: SIZES.small }}
          >
            <Text
              style={{
                fontSize: SIZES.font,
                fontWeight: "600",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              Popular Nfts
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", marginHorizontal: SIZES.base }}
          >
            <View>
              <FlatList
                data={Nft}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <NftCard data={item} />}
                horizontal
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ padding: SIZES.base }}
              />
            </View>
          </View>

          <View
            style={{ marginTop: SIZES.small, marginHorizontal: SIZES.base }}
          >
            <View
              style={{ marginTop: SIZES.small, marginHorizontal: SIZES.base }}
            >
              <Text
                style={{
                  fontSize: SIZES.font,
                  fontWeight: "600",
                  fontFamily: "OpenSans_600SemiBold",
                }}
              >
                What can we help you find Charlotte ?
              </Text>
            </View>
            <FlatList
              data={Nftdb}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => <NftGdb db={item} />}
              horizontal
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ padding: SIZES.base }}
            />
          </View>

          <View
            style={{
              flex: 1,
              marginTop: SIZES.medium,
              marginHorizontal: SIZES.base,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.font,
                color: COLORS.Gray2,
                fontWeight: "600",
                marginBottom: SIZES.base,
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              Top-rated experiences
            </Text>
            <Text
              style={{
                fontSize: SIZES.small,
                color: COLORS.gray,
                fontWeight: "600",
                fontFamily: "OpenSans_600SemiBold",
              }}
            >
              Purchase the latest Nfts
            </Text>

            {/* <FlatList
              data={NftDbb}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => <Nftdb01 db01={item} />}
              decelerationRate="fast"
              vertical
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ padding: SIZES.base }}
            /> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});

export default HomeScreen;

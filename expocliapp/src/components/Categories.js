import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { images, COLORS, SIZES, SHADOWS } from "../../constant";

const Categories = () => {
  let listOfTabs = [
    {
      id: 0,
      name: "Sort",
      icon: images.filter,
      iconLeft: images.chevron,
    },
    {
      id: 1,
      name: "Likes(2)",
    },
    {
      id: 2,
      name: "Great Offers",
    },
    {
      id: 3,
      name: "Virtual Fashion",
    },
    {
      id: 4,
      name: "Blockchains",
    },
    {
      id: 5,
      name: "Consortium",
    },
    {
      id: 6,
      name: "Marketing",
    },
    {
      id: 7,
      name: "Artwork",
    },
    {
      id: 8,
      name: "Music",
    },
    {
      id: 9,
      name: "Gaming",
    },
    {
      id: 10,
      name: "Art",
    },
    {
      id: 11,
      name: "Rating 4.0+",
    },
    {
      id: 12,
      name: "More",
      icon: images.chevron,
    },
  ];
  const [selectedTab, setSelectedtTab] = useState(listOfTabs[0]);
  return (
    <>
      <View
        style={{ marginHorizontal: SIZES.base, marginVertical: SIZES.small }}
      >
        <View style={{ marginTop: SIZES.base, marginBottom: SIZES.medium }}>
          <Text style={{ fontSize: SIZES.font, fontWeight: "600" }}>
            Categories
          </Text>
        </View>
        <FlatList
          data={listOfTabs}
          keyExtractor={(item) => item.id}
          horizontal
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: SIZES.base }}
          renderItem={({ item: tab }) => (
            <>
              <TouchableOpacity
                style={styles.tabContainer}
                onPress={() => setSelectedtTab(tab)}
              >
                <View
                  style={[
                    styles.pillTab,
                    {
                      backgroundColor:
                        selectedTab === tab ? COLORS.Gray2 : COLORS.transparent,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.pillText,
                      {
                        color:
                          selectedTab === tab ? COLORS.white : COLORS.secondary,
                      },
                    ]}
                  >
                    {tab.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {},
  pillTab: {
    paddingHorizontal: SIZES.extraLarge,
    paddingVertical: SIZES.base,
    marginRight: SIZES.font,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.medium,
    borderRadius: SIZES.small,
  },
  pillText: {
    fontSize: SIZES.small,
    fontWeight: "600",
  },
});

export default Categories;

import * as React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { colors, parameters } from "../global/styles";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const WhereTo = () => (
  <View style={styles.container}>
    <View style={styles.containerBanner}>
      <Text style={styles.bannerText}>30% off, up to $6.00</Text>
      <Text style={styles.bannerMuted}>3 days</Text>

    </View>

    <View style={styles.containerInput}>
      <View style={styles.containerSquare}>
        <View style={styles.square} />
      </View>
      <Text style={styles.text}>Where to?</Text>
      <View style={styles.containerIcon}></View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    position: "absolute",
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    top: SCREEN_HEIGHT ? 144 : 120,
    width: SCREEN_WIDTH - 40
  },
  containerBanner: {
    backgroundColor: colors.green,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bannerText: {
    color: colors.white,
    fontSize: 12,
  },
  bannerMuted: {
    color: colors.mint,
    fontSize: 12
  },
  containerInput: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    height: 48,
  },
  containerSquare: {
    alignItems: "center",
    flex: 2,
  },
  square: {
    backgroundColor: colors.black,
    height: 8,
    width: 8,
  },
  text: {
    color: colors.greyAbbey,
    flex: 8,
    fontSize: 20,
  },
  containerIcon: {
    alignItems: "center",
    borderLeftColor: colors.greyMercury,
    borderLeftWidth: 1,
    flex: 2,
  },
});

export default WhereTo;

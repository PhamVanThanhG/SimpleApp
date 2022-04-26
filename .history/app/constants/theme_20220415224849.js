import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/poppins";
import { Dimensions } from "react-native-web";
import FontLoading from "./font";

const { width, height } = Dimensions.get("window");
export const COLOR = {
  black: "#000",
  white: "#FFF",
  gray: "3F414E",
  blue: "#7583CA",
  purple: "#67447C",
  green: "#61B15A",
  pink: "#B49797",
  pink50: "rgba(180, 151, 151, 0.5)",
};

export const SIZES = {
  // Global size
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // Font size
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // App dimension
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 36 },
};

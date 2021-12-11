import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  OriginContextProvider,
  DestinationContextProvider,
} from "./src/contexts/contexts";
import RootNavigator from "./src/navigation/RootNavigator";
import {colors} from './src/global/styles';

export default function App() {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

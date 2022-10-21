import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
    
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "#673c4f" }} />
      <View style={{ flex: 5, backgroundColor: "#7F557D" }} />
      <View style={{ flex: 3, backgroundColor: "#726E97" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
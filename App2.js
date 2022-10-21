import { useState } from "react";
import { StyleSheet, Text, View, Platform, Pressable, Button } from "react-native";
 
export default function App(){
  let [colors, setColor] = useState("");
  return (
    <View style={[styles.container, {
      float : "left",
      flexDirection : "row"
 
  
    }]}>
      <View style={{ width : 400, height : 700, backgroundColor: colors }}></View>
      <Pressable onPress={()=>setColor("red")}>
      <View style={{ width : 98, height :98, backgroundColor: "red" }} />
      </Pressable>
      <Pressable onPress={()=>setColor("yellow")}>
      <View style={{ width : 98, height :98, backgroundColor: "yellow" }} />
      </Pressable>
      <Pressable onPress={()=>setColor("blue")}>
      <View style={{ width : 98, height :98, backgroundColor: "blue" }} />
      </Pressable>
      <Pressable onPress={()=>setColor("green")}>
      <View style={{ width : 98, height :98, backgroundColor: "green" }} />
      </Pressable>
      
    </View>
    
  );
};
 
const styles = StyleSheet.create({
  container: {
    display : "flex",
    paddingTop : Platform.OS === "android" && 45 || Platform.OS === "ios" && 33,
    flexWrap : "wrap"
  }
});


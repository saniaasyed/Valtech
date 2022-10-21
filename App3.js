import { useState } from "react";
import { StyleSheet,Text, View,Button, Image } from "react-native";
import superman from "./assets/superman.jpg"
import ironman from "./assets/ironman.jpg"
import batman from "./assets/batman.jpg"
export default function App(){
  let [hero, setHero] = useState("");
  let[img, setImg] = useState("");
  let herobutton=(name,pics)=>{
    setHero(name);
    setImg(pics)
  }
  return(
    <View style={StyleSheet.container}>
      <Text style={{fontSize: 30}}> Title :{hero}</Text>
      <Image source={img}></Image>
      <Button title="Superman" onPress={()=>herobutton("Superman",superman)}></Button>
      <Button title="Ironman" onPress={()=>herobutton("Ironman",ironman)}></Button>
      <Button title="Batman" onPress={()=>herobutton("batman",batman)}></Button>
    </View>
  )
}
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import animals from "./assets/img";
import { Button } from "./components";

export default function App() {
  const [currentAnimal, setCurrentAnimal] = useState(animals.cat);

  const onPress = ({ animal }) => {
    switch (animal) {
      case "Cat": {
        console.log("Cat");
        setCurrentAnimal(animals.cat);
        break;
      }
      case "Dog": {
        console.log("Dog");
        setCurrentAnimal(animals.dog);
        break;
      }
      default: {
        console.log("Rabbit");
        setCurrentAnimal(animals.rabbit);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={currentAnimal} style={styles.image} />
      <View style={styles.buttons}>
        <Button onPress={() => onPress({ animal: "Cat" })} title={"Cat"} />
        <Button onPress={() => onPress({ animal: "Dog" })} title={"Dog"} />
        <Button onPress={onPress} title={"Rabbit"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 5,
  },
  buttons: {
    marginTop: 50,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
});

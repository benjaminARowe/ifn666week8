import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { LoggerContext } from "../components/LoggerProvider";
export default function LinksScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <AddButton title="Fruit" />
      <AddButton title="Coffee" />
      <AddButton title="Chocolate" />
      <AddButton title="Walk" />
    </ScrollView>
  );
}

function AddButton(props) {
  const [state, setState] = React.useContext(LoggerContext);
  return (
    <View style={styles.add_button}>
      <Button
        title={props.title}
        color="#841584"
        onPress={() => addEvent(props.title, state, setState)}
      />
    </View>
  );
}

function addEvent(event, state, setState) {
  let objIndex = state.findIndex((obj) => obj.event === event);

  setState((x) => {
    x[objIndex].data.push(new Date().getTime());
    return [...x];
  });

  AsyncStorage.setItem("@Log", JSON.stringify(state));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  add_button: {
    padding: 5,
    margin: 10,
  },
});

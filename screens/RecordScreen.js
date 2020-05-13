import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

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
function scaleSize(fontSize) {
  const window = Dimensions.get("window");
  return Math.round((fontSize / 375) * Math.min(window.width, window.height));
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
    x[objIndex].data.push(Date());
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
    padding: scaleSize(10),
    margin: scaleSize(10),
  },
});

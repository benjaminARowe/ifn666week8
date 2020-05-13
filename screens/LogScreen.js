import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import { LoggerContext } from "../components/LoggerProvider";

function scaleSize(fontSize) {
  const window = Dimensions.get("window");
  return Math.round((fontSize / 375) * Math.min(window.width, window.height));
}

export default function HomeScreen() {
  const [state, setState] = React.useContext(LoggerContext);
  console.log(state);
  const log = [
    {
      event: "Chocolate",
      data: [
        "Tue Apr 21 2020 22:01:33 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:37 GMT+1000 (AEST)",
      ],
    },
    {
      event: "Coffee",
      data: [
        "Tue Apr 21 2020 22:01:21 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:28 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:30 GMT+1000 (AEST)",
      ],
    },
    {
      event: "Fruit",
      data: [
        "Tue Apr 21 2020 22:01:35 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:36 GMT+1000 (AEST)",
      ],
    },
    {
      event: "Walk",
      data: [
        "Tue Apr 21 2020 22:01:17 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:32 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:38 GMT+1000 (AEST)",
        "Tue Apr 21 2020 22:01:39 GMT+1000 (AEST)",
      ],
    },
  ];
  return (
    <ScrollView style={styles.container}>
      {log.map((x) => (
        <EventLog {...x} key={JSON.stringify(x.event)} />
      ))}
    </ScrollView>
  );
}
function EventLog(props) {
  return (
    <View>
      <View style={styles.event_title}>
        <Text>{props.event}</Text>
      </View>
      <View style={styles.event_data}>
        {props.data.map((x) => (
          <Text key={x}>{x}</Text>
        ))}
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  event_title: {
    backgroundColor: "red",
    padding: scaleSize(20),
    margin: scaleSize(10),
  },
  event_data: {
    backgroundColor: "#fff",

    margin: scaleSize(10),
  },
});

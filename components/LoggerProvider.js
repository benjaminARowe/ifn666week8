import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoggerContext = React.createContext();

export const LoggerProvider = ({ children }) => {
  const [state, setState] = useState([
    { event: "Chocolate", data: [] },
    { event: "Coffee", data: [] },
    { event: "Fruit", data: [] },
    { event: "Walk", data: [] },
  ]);

  let _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@Log");
      console.log("Retrieved LOG");
      console.log(value);
      if (value !== null) {
        // We have data!!
        setState(JSON.parse(value));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    _retrieveData();
  }, []);
  return (
    <LoggerContext.Provider value={[state, setState]}>
      {children}
    </LoggerContext.Provider>
  );
};

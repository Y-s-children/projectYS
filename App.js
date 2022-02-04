import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPageView from "./src/LoginPage/LoginPageView/LoginPageView";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <LoginPageView></LoginPageView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
});

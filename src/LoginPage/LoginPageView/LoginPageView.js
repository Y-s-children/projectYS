import { StyleSheet, View, Text, Image } from "react-native";
import kakaoBtnImg from "./kakao_login_large_narrow.png";

export default function LoginPageView() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}></View>

      <Image style={styles.btn} source={kakaoBtnImg}></Image>
      <Image style={styles.btn} source={kakaoBtnImg}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  logo: {
    aspectRatio: 1,
    flex: 0.3,
    backgroundColor: "blue",
    marginBottom: 0,
  },
  kakao: {
    flex: 0.1,
    backgroundColor: "gold",
    width: "10%",
  },
  btn: {
    flex: 0.08,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 20,
  },
});

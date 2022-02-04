import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddDirectory from "./AddDirectory";
import SingleDirectory from "./SingleDirectory";

export default function BulletinView() {
  return (
    <View style={styles.container}>
      <View style={styles.directoryPath}>
        <Text style={{ fontSize: 36 }}>/root</Text>
      </View>
      <View style={{ flex: 0.9 }}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <SingleDirectory name={"프론트 회의록"}></SingleDirectory>
          <SingleDirectory name={"백엔드 회의록"}></SingleDirectory>
          <SingleDirectory name={"참고 문헌"}></SingleDirectory>
          <SingleDirectory name={"참고 문헌"}></SingleDirectory>
          <SingleDirectory name={"참고 문헌"}></SingleDirectory>
          <AddDirectory name={"추가하기"}></AddDirectory>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrollView: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  directoryPath: {
    flex: 0.1,
    borderBottomWidth: 4,
    borderBottomColor: "#FF9090",
    paddingLeft: 7,
  },
});

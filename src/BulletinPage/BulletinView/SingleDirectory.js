import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function SingleDirectory(props) {
  // props는 재 할당할 수 없다.
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.insideDirectoryButton}></TouchableOpacity>

      <View style={styles.insideDirectoryBackground}>
        <Text style={styles.directoryName}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT / 8,
    width: SCREEN_WIDTH - 30,
    borderRadius: SCREEN_HEIGHT / 8 / 2,

    backgroundColor: "#FFEAEA",
    marginVertical: 20,

    flexDirection: "row",
  },

  insideDirectoryButton: {
    height: SCREEN_HEIGHT / 8,
    width: SCREEN_HEIGHT / 8,
    borderRadius: SCREEN_HEIGHT / 8 / 2,

    backgroundColor: "#FF9090",
  },

  insideDirectoryBackground: {
    flex: 1,
    borderRadius: SCREEN_HEIGHT / 8 / 2,

    backgroundColor: "#FFEAEA",

    justifyContent: "center",
  },
  directoryName: {
    marginLeft: 10,
    fontSize: 24,
  },
});

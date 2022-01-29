import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function AddDirectory(props) {
  // props는 재 할당할 수 없다.
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.insideDirectoryButton}>
        <Text style={{ fontSize: 36 }}>+</Text>
      </TouchableOpacity>

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

    backgroundColor: "#E9E9E9",
    marginVertical: 20,

    flexDirection: "row",
  },

  insideDirectoryButton: {
    height: SCREEN_HEIGHT / 8,
    width: SCREEN_HEIGHT / 8,
    borderRadius: SCREEN_HEIGHT / 8 / 2,

    borderColor: "#B4B4B4",
    borderWidth: 3,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",
  },

  insideDirectoryBackground: {
    flex: 1,
    borderRadius: SCREEN_HEIGHT / 8 / 2,

    backgroundColor: "#E9E9E9",

    justifyContent: "center",
  },
  directoryName: {
    marginLeft: 10,
    fontSize: 24,
  },
});

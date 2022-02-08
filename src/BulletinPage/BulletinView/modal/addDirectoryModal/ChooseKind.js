import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddDirectoryModal(props) {
  const onPressFolder = () => {
    props.onChange("folder");
  };
  const onPressFile = () => {
    props.onChange("file");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.folderOrFile}>폴더 or 파일</Text>
      <View style={styles.lineWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.folderText}>폴더</Text>
          <TouchableOpacity onPress={onPressFolder}>
            {props.kind === "folder" ? (
              <AntDesign name="checkcircle" size={24} color="black" />
            ) : (
              <AntDesign name="checkcircleo" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.fileText}>파일</Text>
          <TouchableOpacity onPress={onPressFile}>
            {props.kind === "file" ? (
              <AntDesign name="checkcircle" size={24} color="black" />
            ) : (
              <AntDesign name="checkcircleo" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 40,
  },

  folderOrFile: {
    fontSize: 27,
    fontWeight: "bold",

    borderBottomWidth: 1,
    borderBottomColor: "#8C8C8C",

    marginBottom: 5,
  },

  lineWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  folderText: {
    fontSize: 24,
    marginRight: 10,
  },
  fileText: {
    fontSize: 24,
    marginRight: 10,
  },
});

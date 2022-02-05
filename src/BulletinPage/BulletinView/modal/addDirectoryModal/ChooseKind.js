import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function AddDirectoryModal(props) {
  const [kind, setKind] = useState(props.default);

  const onPressFolder = () => {
    setKind("folder");
    props.onChange("folder");
  };
  const onPressFile = () => {
    setKind("file");
    props.onChange("file");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.folderOrFile}>폴더 or 파일</Text>
      <View style={styles.lineWrapper}>
        <View style={styles.wrapper}>
          <Text style={styles.folderText}>폴더</Text>
          <TouchableOpacity onPress={onPressFolder}>
            {kind === "folder" ? (
              <AntDesign name="checkcircle" size={24} color="black" />
            ) : (
              <AntDesign name="checkcircleo" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.fileText}>파일</Text>
          <TouchableOpacity onPress={onPressFile}>
            {kind === "file" ? (
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
    flex: 1,
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

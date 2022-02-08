import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import ModifyDirectoryModal from "./modal/modifyDirectoryModal/ModifyDirectoryModal";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function SingleDirectory(props) {
  const [modalVisibility, setModalVisibility] = useState(false);

  const onCloseModal = () => {
    setModalVisibility(false);
  };

  const onModfiyName = (modifiedName) => {
    props.onModifyDirectoryName(props.directoryName, modifiedName);
  };

  const onDeleteDirectory = () => {
    props.onDeleteDirectory(props.directoryName);
  };

  const onDirectoryMoveForward = () => {
    props.onDirectoryMoveForward(props.directoryName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.insideDirectoryButton} onPress={onDirectoryMoveForward}></TouchableOpacity>

      <TouchableOpacity
        style={styles.insideDirectoryBackground}
        activeOpacity={1}
        onLongPress={() => {
          setModalVisibility(true);
        }}
      >
        <Text style={styles.directoryName}>{props.directoryName}</Text>
      </TouchableOpacity>
      <ModifyDirectoryModal
        visible={modalVisibility}
        onClose={onCloseModal}
        onModifyName={onModfiyName}
        onDeleteDirectory={onDeleteDirectory}
      ></ModifyDirectoryModal>
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

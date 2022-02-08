import { Modal, View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";
import ChangeName from "./ChangeName";
import { AntDesign } from "@expo/vector-icons";
import DeleteDirectory from "./DeleteDirectory";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function ModifyDirectoryModal(props) {
  let modifiedName = "";
  const onEndEditing = (text) => {
    modifiedName = text;
  };

  let isDelete = false;
  const onPressDelete = (decision) => {
    isDelete = decision;
  };

  const onCancel = () => {
    props.onClose();
  };

  const onConfirm = () => {
    if (isDelete === true) {
      props.onDeleteDirectory();
    } else {
      if (modifiedName !== "") {
        props.onModifyName(modifiedName);
      }
    }
    props.onClose();
  };

  return (
    <Modal animationType="fade" visible={props.visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <ChangeName onEndEditing={onEndEditing}></ChangeName>
          <DeleteDirectory onPress={onPressDelete}></DeleteDirectory>
          <View style={styles.btnWrapper}>
            <TouchableOpacity onPress={onCancel} style={{ flexDirection: "row" }}>
              <Text style={styles.buttonText}>취소</Text>
              <AntDesign name="close" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={{ flexDirection: "row" }}>
              <Text style={styles.buttonText}>확인</Text>
              <AntDesign name="check" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  modalView: {
    flex: 0.8,
    width: (3 * SCREEN_WIDTH) / 4,

    borderRadius: 50,

    paddingVertical: 20,
    paddingHorizontal: 20,

    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    marginRight: 3,
  },
});

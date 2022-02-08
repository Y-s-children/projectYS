import { useState } from "react";
import { Modal, View, StyleSheet, Dimensions, Text, TouchableOpacity, Alert } from "react-native";
import ChooseType from "./ChooseType";
import ChooseName from "./ChooseName";
import { AntDesign } from "@expo/vector-icons";

import * as FileSystem from "expo-file-system";
import * as DocumentPicker from "expo-document-picker";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function AddDirectoryModal(props) {
  const [type, setType] = useState("directory");
  const [confirmedName, setConfirmedName] = useState("");

  let contentURI = "";
  const onChangeType = async (newType) => {
    if (type === "directory" && newType === "file") {
      await DocumentPicker.getDocumentAsync()
        .then((result) => {
          if (result.type === "success") {
            setConfirmedName(result.name);
            return result.uri;
          } else {
            return Promise.reject();
          }
        })
        .then(async (fileURI) => {
          contentURI = await FileSystem.getContentUriAsync(fileURI);
          setType("file");
        })
        .catch(() => {
          console.log("on AddDirectoryModal -> onChangeType");
          console.log("cancel to bring file uri -> cannot bring contentURI");
          setType("directory");
        });
    } else {
      if (type === "file" && newType === "directory") {
        contentURI = "";
      }
      setType(newType);
    }
  };

  const onCancel = () => {
    setType("directory");
    setConfirmedName("");
    props.onClose();
  };

  const onConfirm = () => {
    if (confirmedName === "") {
      Alert.alert("이름을 입력해 주세요.");
      return;
    }
    props.onConfirm(type, confirmedName, contentURI);

    setType("directory");
    setConfirmedName("");
    props.onClose();
  };

  return (
    <Modal animationType="fade" visible={props.visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <ChooseType type={type} onChange={onChangeType}></ChooseType>

          <ChooseName
            type={type}
            onEndTyping={(name) => {
              setConfirmedName(name);
            }}
          ></ChooseName>

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
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  buttonText: {
    fontSize: 20,
    marginRight: 3,
  },
});

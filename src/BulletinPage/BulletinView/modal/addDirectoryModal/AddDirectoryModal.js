import { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import ChooseKind from "./ChooseKind";
import ChooseName from "./ChooseName";
import { AntDesign } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function AddDirectoryModal(props) {
  const [kind, setKind] = useState("folder");
  const [confirmedName, setConfirmedName] = useState("");

  const onDismiss = () => {
    setKind("folder");
    setConfirmedName("");
    props.onClose();
  };

  const onConfirm = () => {
    if (confirmedName === "") {
      Alert.alert("이름을 입력해 주세요.");
      return;
    }
    props.onConfirm(kind, confirmedName);
    onDismiss();
  };

  return (
    <Modal animationType="fade" visible={props.visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <ChooseKind
            default={kind}
            onChange={(kind) => {
              setKind(kind);
            }}
          ></ChooseKind>

          <ChooseName
            kind={kind}
            onEndTyping={(name) => {
              setConfirmedName(name);
            }}
          ></ChooseName>

          <View style={styles.btnWrapper}>
            <TouchableOpacity
              onPress={onDismiss}
              style={{ flexDirection: "row", marginRight: 20 }}
            >
              <Text style={styles.buttonText}>취소</Text>
              <AntDesign name="close" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              style={{ flexDirection: "row" }}
            >
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

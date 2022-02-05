import { Modal, View, StyleSheet, Dimensions } from "react-native";
import ChooseKind from "./ChooseKind";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function AddDirectoryModal(props) {
  let folderOrFile = "folder";

  const onDismiss = () => {
    props.onClose();
  };

  return (
    <Modal animationType="slide" visible={props.visible} transparent={false}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <View style={styles.chooseKind}>
            <ChooseKind
              default={folderOrFile}
              onChange={(kind) => {
                folderOrFile = kind;
              }}
            ></ChooseKind>
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
    backgroundColor: "white",
  },
  modalView: {
    flex: 0.8,
    width: (3 * SCREEN_WIDTH) / 4,

    borderColor: "#8C8C8C",
    borderWidth: 3,
    borderRadius: 50,

    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  chooseKind: {
    flex: 0.2,
  },
});

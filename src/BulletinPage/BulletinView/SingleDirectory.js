import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import ModifyDirectoryModal from "./modal/modifyDirectoryModal/ModifyDirectoryModal";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function SingleDirectory(props) {
  const [modalVisibility, setVisibility] = useState(false);

  const onCloseModal = () => {
    setVisibility(false);
  };

  const onModfiyName = (modifiedName) => {
    props.onModifyDirectoryName(props.name, modifiedName);
  };

  const onDeleteDirectory = () => {
    props.onDeleteDirectory(props.name);
  };

  const onModifyDirectory = () => {
    /**
     * {
     *  type: {isDelete: false, isModifyName: false, isModifyPath: false},
     *  modifyName: "",
     *  modifyPath: "/root",
     * }
     */
    // 하나의 modal에서 이름변경 이동 삭제가 모두 일어남을 유의해야 한다.
    // 2가지 이상이 동시에 발생했을때, 수정한 사항이 모두 적합하게 반영되려면 함수호출의 순서와 인자를 잘 파악해야한다.
  };
  // props는 재 할당할 수 없다.
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.insideDirectoryButton}
        onPress={() => props.onClick(props.name)}
      ></TouchableOpacity>

      <TouchableOpacity
        style={styles.insideDirectoryBackground}
        activeOpacity={1}
        onLongPress={() => {
          setVisibility(true);
        }}
      >
        <Text style={styles.directoryName}>{props.name}</Text>
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

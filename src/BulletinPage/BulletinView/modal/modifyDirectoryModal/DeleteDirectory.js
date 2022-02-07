import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function DeleteDirectory(props) {
  const [confirm, setConfirm] = useState(false);

  const onConfirm = () => {
    setConfirm(true);
    props.onPress(true);
  };
  const onPressButton = () => {
    if (confirm == false) {
      Alert.alert("삭제 확인", "정말로 삭제하시겠습니까?", [
        { text: "아니오" },
        { text: "예", onPress: onConfirm },
      ]);
    } else {
      setConfirm(false);
      props.onPress(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>폴더/파일 삭제</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={{ fontSize: 18 }}>삭제하시겠습니까?</Text>
        <TouchableOpacity onPress={onPressButton}>
          {confirm ? (
            <AntDesign name="checkcircle" size={24} color="black" />
          ) : (
            <AntDesign name="checkcircleo" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    borderBottomColor: "#8C8C8C",
    borderBottomWidth: 1,
  },
  wrapper: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

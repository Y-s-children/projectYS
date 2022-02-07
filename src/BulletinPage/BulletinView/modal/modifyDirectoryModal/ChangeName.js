import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function ChooseName(props) {
  const [text, setText] = useState("");

  const onChangeText = (text) => {
    setText(text);
  };
  const onEndEditing = () => {
    props.onEndEditing(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>이름 변경</Text>
      </View>
      <TextInput
        placeholder={"변경할 이름을 입력하세요"}
        style={styles.textInput}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
        value={text}
      ></TextInput>
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
  textInput: {
    fontSize: 24,
  },
});

import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function ChooseName(props) {
  const [text, setText] = useState("");
  const kind = props.kind === "file" ? "파일" : "폴더";

  const onChangeText = (text) => {
    setText(text);
  };
  const onEndEditing = () => {
    props.onEndTyping(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>이름 입력</Text>
      </View>
      <TextInput
        placeholder={kind + "의 이름을 입력하세요"}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        onEndEditing={onEndEditing}
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

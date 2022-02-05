import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Path(props) {
  const paths = props.path.split("/");
  paths.shift(); // 배열의 맨 앞의 ""문자가 항상 존재. 따라서 맨 앞의 원소 삭제

  const onPressPath = (path) => {
    props.onClick(path);
  };

  const movablePath = paths.map((path, index) => (
    <TouchableOpacity key={index} onPress={() => onPressPath(path)}>
      <Text>{"/" + path}</Text>
    </TouchableOpacity>
  ));

  return <View style={styles.container}>{movablePath}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

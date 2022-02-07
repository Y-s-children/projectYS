import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddDirectory from "./AddDirectory";
import SingleDirectory from "./SingleDirectory";

export default function MultiDirectory(props) {
  const onClickDirectory = (name) => {
    props.onChangeDirectory(name);
  };

  const onModifyDirectoryName = (originalName, modifiedName) => {
    props.onModifyDirectoryName(originalName, modifiedName);
  };

  const directories = props.subDirectoryNames.map((name, index) => (
    <SingleDirectory
      key={index}
      name={name}
      onClick={onClickDirectory}
      onModifyDirectoryName={onModifyDirectoryName}
    />
  ));

  const onAddDirectory = (kind, name) => {
    props.onAddDirectory(kind, name);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {directories}
        <AddDirectory name="추가하기" onAddDirectory={onAddDirectory} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  scrollView: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

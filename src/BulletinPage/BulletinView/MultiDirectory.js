import { ScrollView, StyleSheet, View } from "react-native";
import AddDirectory from "./AddDirectory";
import SingleDirectory from "./SingleDirectory";

export default function MultiDirectory(props) {
  const onCreateDirectory = (name) => {
    props.onCreateDirectory(name);
  };

  const onCreateFile = (name, contentURI) => {
    props.onCreateFile(name, contentURI);
  };

  const onDirectoryMoveForward = (name) => {
    props.onDirectoryMoveForward(name);
  };

  const onModifyDirectoryName = (originalName, modifiedName) => {
    props.onModifyDirectoryName(originalName, modifiedName);
  };

  const onDeleteDirectory = (directoryName) => {
    props.onDeleteDirectory(directoryName);
  };

  const directories = props.subDirectoryNames.map((directoryName, index) => (
    <SingleDirectory
      key={index}
      directoryName={directoryName}
      onDirectoryMoveForward={onDirectoryMoveForward}
      onModifyDirectoryName={onModifyDirectoryName}
      onDeleteDirectory={onDeleteDirectory}
    />
  ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {directories}
        <AddDirectory name="추가하기" onCreateDirectory={onCreateDirectory} onCreateFile={onCreateFile} />
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

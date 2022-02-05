import { StyleSheet, View, Text } from "react-native";
import BulletinViewModel from "../BulletinViewModel/BulletinViewModel";
import MultiDirectory from "./MultiDirectory";
import { useState } from "react";
import Path from "./Path";

const ViewModel = new BulletinViewModel();

export default function BulletinView() {
  const [currentDirectory, setDirectory] = useState("root");

  const onChangeDirectory = (name) => {
    setDirectory(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.directoryPathContainer}>
        <Path
          path={ViewModel.getDirectoryPath(currentDirectory)}
          onClick={onChangeDirectory}
        ></Path>
      </View>
      <MultiDirectory
        name={currentDirectory}
        onChangeDirectory={onChangeDirectory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  directoryPathContainer: {
    flex: 0.1,
    borderBottomWidth: 4,
    borderBottomColor: "#FF9090",
    paddingLeft: 7,
    justifyContent: "flex-end",
  },
});

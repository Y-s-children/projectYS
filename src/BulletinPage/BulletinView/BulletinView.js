import { StyleSheet, View, Text } from "react-native";
import BulletinViewModel from "../BulletinViewModel/BulletinViewModel";
import MultiDirectory from "./MultiDirectory";
import { useState } from "react";
import Path from "./Path";

const ViewModel = new BulletinViewModel();

export default function BulletinView() {
  const [currentDirectoryPath, setCurrentDirectoryPath] = useState("/root");
  const [subDirectory, setSubDirectory] = useState(
    ViewModel.getSubDirectoryNames("/root")
  );

  const onChangePath = (newPath) => {
    setCurrentDirectoryPath(newPath);
    setSubDirectory(ViewModel.getSubDirectoryNames(newPath));
  };

  const onDirectoryMoveFront = (directoryName) => {
    const newPath = currentDirectoryPath + "/" + directoryName;
    onChangePath(newPath);
  };

  const onAddDirectory = (kind, name) => {
    ViewModel.createNewDirectory(name, currentDirectoryPath, kind);
    setSubDirectory(ViewModel.getSubDirectoryNames(currentDirectoryPath));
  };

  const onModifyDirectoryName = (originalDirectoryName, newDiretoryName) => {
    // ViewModel.createNewDirectory(newDiretoryName, "/root/프론트 회의록");
    // ViewModel.deleteDirectory("/root/프론트 회의록");
    // ViewModel.getSubDirectory("/root/프론트 회의록");
  };

  return (
    <View style={styles.container}>
      <View style={styles.directoryPathContainer}>
        <Path path={currentDirectoryPath} onClick={onChangePath}></Path>
      </View>
      <MultiDirectory
        subDirectoryNames={subDirectory}
        onChangeDirectory={onDirectoryMoveFront}
        onAddDirectory={onAddDirectory}
        onModifyDirectoryName={onModifyDirectoryName}
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

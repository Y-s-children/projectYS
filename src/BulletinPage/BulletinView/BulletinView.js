import { StyleSheet, View, Text } from "react-native";
import BulletinViewModel from "../BulletinViewModel/BulletinViewModel";
import MultiDirectory from "./MultiDirectory";
import { useState } from "react";
import Path from "./Path";

const ViewModel = new BulletinViewModel();

export default function BulletinView() {
  const [currentDirectoryPath, setCurrentDirectoryPath] = useState("/root");
  const [subDirectory, setSubDirectory] = useState(ViewModel.getSubDirectoryNames("/root"));

  const onChangePath = (newPath) => {
    setCurrentDirectoryPath(newPath);
    setSubDirectory(ViewModel.getSubDirectoryNames(newPath));
  };

  const onDirectoryMoveFront = (directoryName) => {
    const newPath = currentDirectoryPath + "/" + directoryName;
    onChangePath(newPath);
  };

  const onCreateDirectory = (name) => {
    ViewModel.createNewDirectory(name, currentDirectoryPath);
    setSubDirectory(ViewModel.getSubDirectoryNames(currentDirectoryPath));
  };

  const onCreateFile = (name, contentURI) => {
    ViewModel.createNewFile(name, currentDirectoryPath, contentURI);
    setSubDirectory(ViewModel.getSubDirectoryNames(currentDirectoryPath));
  };

  const onModifyDirectoryName = (originalDirectoryName, newDiretoryName) => {
    const path = currentDirectoryPath + "/" + originalDirectoryName;
    ViewModel.modifyDirectoryName(path, newDiretoryName);
    setSubDirectory(ViewModel.getSubDirectoryNames(currentDirectoryPath));
  };

  const onDeleteDirectory = (directoryName) => {
    const path = currentDirectoryPath + "/" + directoryName;
    ViewModel.deleteDirectory(path);
    setSubDirectory(ViewModel.getSubDirectoryNames(currentDirectoryPath));
  };

  return (
    <View style={styles.container}>
      <View style={styles.directoryPathContainer}>
        <Path path={currentDirectoryPath} onClick={onChangePath}></Path>
      </View>
      <MultiDirectory
        subDirectoryNames={subDirectory}
        onChangeDirectory={onDirectoryMoveFront}
        onAddDirectory={onCreateDirectory}
        onCreateFile={onCreateFile}
        onModifyDirectoryName={onModifyDirectoryName}
        onDeleteDirectory={onDeleteDirectory}
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

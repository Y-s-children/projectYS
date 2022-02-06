import { StyleSheet, View, Text } from "react-native";
import BulletinViewModel from "../BulletinViewModel/BulletinViewModel";
import MultiDirectory from "./MultiDirectory";
import { useState } from "react";
import Path from "./Path";

const ViewModel = new BulletinViewModel();

export default function BulletinView() {
  const [currentDirectory, setDirectory] = useState("root");
  const [subDirectory, setSubDirectory] = useState(
    ViewModel.getSubDirectoryNames("root")
  );

  const onChangeDirectory = (name) => {
    setDirectory(name);
    setSubDirectory(ViewModel.getSubDirectoryNames(name));
  };

  const onAddDirectory = (kind, name) => {
    const path = ViewModel.getDirectoryPath(currentDirectory) + "/" + name;
    ViewModel.addNewDirectory(name, path, currentDirectory);

    // setState는 값이 변할때 render되는데, 참조의 경우, 참조 주소가 바뀌어야 한다. -> 배열은 배열의 값을 바꾼다고 render되지 않음!
    setSubDirectory([...subDirectory, name]);
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
        subDirectoryNames={subDirectory}
        onChangeDirectory={onChangeDirectory}
        onAddDirectory={onAddDirectory}
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

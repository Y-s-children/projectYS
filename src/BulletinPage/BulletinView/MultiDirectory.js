import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddDirectory from "./AddDirectory";
import SingleDirectory from "./SingleDirectory";
import BulletinViewModel from "../BulletinViewModel/BulletinViewModel";

const ViewModel = new BulletinViewModel();

export default function MultiDirectory(props) {
  const subDirectorNames = ViewModel.getSubDirectoryNames(props.name);

  const onClickDirectory = (name) => {
    props.onChangeDirectory(name);
  };

  const Directories = subDirectorNames.map((name, index) => (
    <SingleDirectory key={index} name={name} onClick={onClickDirectory} />
  ));

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {Directories}
        <AddDirectory name="추가하기" />
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

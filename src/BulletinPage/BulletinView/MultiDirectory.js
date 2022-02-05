import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddDirectory from "./AddDirectory";
import SingleDirectory from "./SingleDirectory";
import BulletinViewModel from "../BulletinViewModel/BulletinViewModel";
import { useEffect, useState } from "react";

const ViewModel = new BulletinViewModel();

export default function MultiDirectory(props) {
  const subDirectorNames = ViewModel.getSubDirectoryNames(props.name);

  const onClickDirectory = (name) => {
    props.onChangeDirectory(name);
  };

  const directories = subDirectorNames.map((name, index) => (
    <SingleDirectory key={index} name={name} onClick={onClickDirectory} />
  ));

  const onAddDirectory = (kind, name) => {
    console.log(kind);
    console.log(name);
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

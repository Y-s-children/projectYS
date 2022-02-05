import { StyleSheet, Text, View, Dimensions } from "react-native";

import { theme } from "../../theme.js";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export function TeamAssignment({ assignmentName, dDay }) {
  return (
    <View style={styles.container}>
      <View style={styles.unorderedList}></View>
      <View style={styles.content}>
        <Text style={styles.assignmentName}>{assignmentName}</Text>
        <Text style={styles.dDay}>{dDay}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 14,
    marginLeft: 8,
  },
  unorderedList: {
    backgroundColor: theme.darkGreen,
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    marginBottom: 20,
  },
  content: {
    flexDirection: "column",
    marginLeft: 20,
  },
  assignmentName: {
    fontSize: 24,
  },
  dDay: {
    marginLeft: 5,
    fontSize: 18,
    color: theme.grey,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { theme } from "../../theme.js";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export function AddAssignment({ assignmentName }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.unorderedList}>
        <Text style={styles.unorderedListText}>+</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.assignmentName}>{assignmentName}</Text>
      </View>
    </TouchableOpacity>
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
    borderColor: theme.grey,
    borderWidth: 2,
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  unorderedListText: {
    fontSize: 16,
    fontWeight: "800",
  },
  content: {
    flexDirection: "column",
    marginLeft: 15,
  },
  assignmentName: {
    fontSize: 24,
  },
  dDay: {
    marginLeft: 5,
    fontSize: 12,
    color: theme.grey,
  },
});

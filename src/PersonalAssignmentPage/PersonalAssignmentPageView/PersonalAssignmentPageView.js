import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
// import { ScrollView } from 'react-native-web';

import { theme } from "../../theme.js";
import { CompletedAssignment } from "./CompletedAssignment.js";
import { TeamAssignment } from "./TeamAssignment.js";
import { PersonalAssignment } from "./PersonalAssignment.js";
import { AddAssignment } from "./AddAssignment.js";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export function PersonalAssignmentPageView() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Y's children</Text>
        <Text style={styles.headerText}>메뉴</Text>
      </View>

      <ScrollView contentContainerStyle={styles.assignments}>
        <View style={styles.teamAssignments}>
          <TeamAssignment assignmentName={"팀 과제1"} dDay={"D-10"} />
          <TeamAssignment assignmentName={"팀 과제2"} dDay={"D-4"} />
        </View>
        <View style={styles.personalAssignments}>
          <PersonalAssignment assignmentName={"개인 과제1"} dDay={"D-6"} />
          <PersonalAssignment assignmentName={"개인 과제2"} dDay={"D-3"} />
          <AddAssignment assignmentName={"과제추가하기"} />
        </View>
        <View style={styles.completedAssignments}>
          <CompletedAssignment assignmentName={"완료된 과제1"} />
          <CompletedAssignment assignmentName={"완료된 과제2"} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.lightGreen,
    height: 57,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "500",
    fontSize: 18,
    paddingHorizontal: 13,
  },
  assignments: {
    justifyContent: "center",
    backgroundColor: "white",
  },
  teamAssignments: {
    marginHorizontal: 25,
    borderBottomColor: theme.green,
    borderBottomWidth: 3,
  },
  personalAssignments: {
    marginHorizontal: 25,
    borderBottomColor: theme.green,
    borderBottomWidth: 3,
  },

  completedAssignments: {
    marginHorizontal: 25,
  },
});

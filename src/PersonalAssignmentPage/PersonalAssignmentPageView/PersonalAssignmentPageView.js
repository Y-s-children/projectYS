import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {theme} from "../../theme.js";

export function PersonalAssignmentPageView() {

  const [assignments, setAssignments] = React.useState({});
  const [assignmentType, setAssignmentType] = React.useState({});
  const addToDo = () => {
    const newAssignment = {...assignments, 
    [Date.now()] : {context , deadline, assignmentType},
    };
    setAssignments(newAssignment);
  };
 
  // debugging
  setAssignmentType('completed')


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Y's children</Text>
        <Text>메뉴</Text>
      </View>
      
      <View style={styles.assignments}>

        <ScrollView style={styles.teamAssignments}>
          {Object.keys(assignments).map((key) => (
            assignments[key].assignmentType === 'completed' ? 
            <View style={styles.assignment} key={key}> 
              <Text style={styles.assignmentText}>{assignments[key].context}</Text>
              <Text style={styles.assignmentDeadline}>{assignments[key].deadline}</Text>
            </View> : null
            ))}
        </ScrollView>




        <View style={styles.teamAssignments}>
          <Text>teamAssignments!!!</Text>
        </View>
        <View style={styles.personalAssignments}>
          <Text>personalAssignments!!!</Text>
        </View>
        <View style={styles.completedAssignments}>
          <Text>completedAssignments!!!</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.headerBackground,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500',
  },
  assignments: {

  },
  teamAssignments: {
    flex: 1,
    backgroundColor: '#0ff',
  },
  personalAssignments: {
    flex: 1,
    backgroundColor: '#f0f',
  },
  completedAssignments: {
    flex: 1,
    backgroundColor: '#ff0',
  },
});

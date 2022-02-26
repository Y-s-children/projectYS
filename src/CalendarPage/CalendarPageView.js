import { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Pressable,
} from "react-native";
import Calendar from "./Calendar";

export default function CalendarPageView({
  onDayChange,
  onMonthChange,
  onAddDaily,
  weeklyAssignments,
  dailyAssignments,
  date,
}) {
  const window = useWindowDimensions();
  const weeklySchedules = useMemo(
    () =>
      weeklyAssignments.map(({ topic, id }) => (
        <Schedule topic={topic} key={id} />
      )),
    [weeklyAssignments]
  );

  const dailySchedules = useMemo(
    () =>
      dailyAssignments.map(({ topic, id }) => (
        <Schedule topic={topic} key={id} />
      )),
    [dailyAssignments]
  );

  console.log("CalendarPageView RENDER!");
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.calendarContainer, { width: window.width * 0.9 }]}>
        <Calendar onDayChange={onDayChange} onMonthChange={onMonthChange} />
      </View>
      <View style={[styles.scheduleContainer, { width: window.width * 0.9 }]}>
        <Text style={styles.scheduleDate}>{date}</Text>
        {dailySchedules}
        <Pressable
          style={({ pressed }) => [
            { backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent" },
            styles.addSchedule,
          ]}
          onPress={() => onAddDaily("hi")}
        >
          <View style={[styles.scheduleCircle, { backgroundColor: "gray" }]}>
            <Text style={{ textAlign: "center", color: "white" }}>+</Text>
          </View>
          <Text style={styles.scheduleText}>일정 추가하기</Text>
        </Pressable>
      </View>

      <View
        style={[styles.dailyScheduleContainer, { width: window.width * 0.9 }]}
      >
        <Text style={styles.scheduleDate}>정기 회의</Text>
        {weeklySchedules}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent",
            },
            styles.addSchedule,
          ]}
          onPress={() => {}}
        >
          <View style={[styles.scheduleCircle, { backgroundColor: "gray" }]}>
            <Text style={{ textAlign: "center", color: "white" }}>+</Text>
          </View>
          <Text style={styles.scheduleText}>일정 추가하기</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

function Schedule({ topic }) {
  return (
    <View style={styles.schedule}>
      <View style={styles.scheduleCircle} />
      <Text style={styles.scheduleText}>{topic}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
  },
  calendarContainer: {
    marginVertical: 15,
  },
  calendar: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  scheduleContainer: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 15,
    margin: 10,
  },
  schedule: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  scheduleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "tomato",
    marginRight: 10,
  },
  scheduleText: {
    color: "black",
  },
  scheduleDate: {
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  dailyScheduleContainer: {
    borderWidth: 2,
    borderColor: "green",
    borderRadius: 15,
    margin: 10,
  },
  addSchedule: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
});

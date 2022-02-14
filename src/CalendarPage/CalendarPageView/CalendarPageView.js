import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Calendar } from "react-native-calendars";
import "react-native-get-random-values";
import CalendarViewModel from "../CalendarPageViewModel/CalendarPageViewModel";

export default function CalendarPageView() {
  const window = useWindowDimensions();
  const [selectedDate, setSelectedDate] = useState(CalendarViewModel.getDate());
  const [dailyAssignments, setDailyAssignments] = useState([]);
  const [weeklyAssignments, setWeeklyAssignments] = useState(
    CalendarViewModel.getWeeklyAssignments()
  );

  //   useEffect(() => {
  //     const unsubscribe = CalendarViewModel.subscribe((changeType) => {
  //       if (changeType === "addDaily") {
  //         const newDailyAssignments =
  //           CalendarViewModel.getAssignmentsListByDate(selectedDate);
  //         setDailyAssignments([...newDailyAssignments]);
  //       } else if (changeType === "addWeekly") {
  //         const newWeeklyAssignments = CalendarViewModel.getWeeklyAssignments();
  //         setWeeklyAssignments([...newWeeklyAssignments]);
  //       }
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);

  //   const weeklyAssignments = useMemo(() => {
  //     console.log("memo!");
  //     return CalendarViewModel.getWeeklyAssignments().map(({ topic, id }) => (
  //       <View key={id} style={styles.schedule}>
  //         <View style={styles.scheduleCircle} />
  //         <Text style={styles.scheduleText}>{topic}</Text>
  //       </View>
  //     ));
  //   }, []);

  const markedDates = useMemo(() => {
    console.log("memo??");
    return CalendarViewModel.getMarkedDatesByMonth(selectedDate);
  }, [selectedDate.substring(0, 7)]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.calendarContainer, { width: window.width * 0.9 }]}>
        <Calendar
          style={{
            borderColor: "red",
            borderWidth: 2,
            borderRadius: 15,
            padding: 10,
          }}
          monthFormat="yyyy년 M월"
          hideDayNames={true}
          onDayPress={(event) => {
            setSelectedDate(event.dateString);
            setDailyAssignments([
              ...CalendarViewModel.getAssignmentsListByDate(event.dateString),
            ]);
          }}
          onMonthChange={(event) => {
            setSelectedDate(event.dateString);
            setDailyAssignments([
              ...CalendarViewModel.getAssignmentsListByDate(event.dateString),
            ]);
          }}
          markingType={"multi-dot"}
          markedDates={markedDates}
        />
      </View>

      <View style={[styles.scheduleContainer, { width: window.width * 0.9 }]}>
        <Text style={styles.scheduleDate}>{selectedDate}</Text>
        {dailyAssignments.map(({ topic, id }) => (
          <View key={id} style={styles.schedule}>
            <View style={styles.scheduleCircle} />
            <Text style={styles.scheduleText}>{topic}</Text>
          </View>
        ))}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent",
            },
            styles.addSchedule,
          ]}
          onPress={() => {
            CalendarViewModel.addDailySchedule(selectedDate, "hi");
            setDailyAssignments([
              ...CalendarViewModel.getAssignmentsListByDate(selectedDate),
            ]);
          }}
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
        {weeklyAssignments.map(({ topic, id }) => (
          <View key={id} style={styles.schedule}>
            <View style={styles.scheduleCircle} />
            <Text style={styles.scheduleText}>{topic}</Text>
          </View>
        ))}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "transparent",
            },
            styles.addSchedule,
          ]}
          onPress={() => {
            CalendarViewModel.addWeeklySchedule("hi");
            setWeeklyAssignments([
              ...CalendarViewModel.getWeeklyAssignments(selectedDate),
            ]);
          }}
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

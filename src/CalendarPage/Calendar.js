import { Calendar as Calendars } from "react-native-calendars";
import { StyleSheet } from "react-native";
import { useDate, useDateDispatch } from "./CalendarPageModel";

export default function Calendar({ onDayChange, onMonthChange }) {
  //   const setDate = useDateDispatch();

  //   const onDayChange = (date) => {
  //     setDate(date);
  //   };

  //   const onMonthChange = (date) => {
  //     setDate(date);
  //   };

  return (
    <Calendars
      style={styles.calendar}
      monthFormat="yyyy년 M월"
      hideDayNames={true}
      onDayPress={(event) => {
        onDayChange(event.dateString);
      }}
      onMonthChange={(event) => {
        onMonthChange(event.dateString);
      }}
      markingType={"multi-dot"}
      markedDates={{}}
    />
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    marginVertical: 15,
  },
  calendar: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
});

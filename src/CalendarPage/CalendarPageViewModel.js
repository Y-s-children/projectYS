import {
  useDailySchedules,
  useDate,
  useDispatch,
  useWeeklySchedules,
} from "./CalendarPageModel";
import CalendarPageView from "./CalendarPageView";

export default function CalendarPageViewModel() {
  // model properties
  const date = useDate();
  const dailyAssignments = useDailySchedules();
  const weeklyAssignments = useWeeklySchedules();

  // model handlers
  const { setDate, addDaily } = useDispatch();

  // view action handlers
  const onDayChange = (_date) => {
    setDate(_date);
  };

  const onMonthChange = (_date) => {
    setDate(_date);
  };

  const onAddDaily = (topic) => {
    addDaily(topic);
  };

  return (
    <CalendarPageView
      date={date}
      onDayChange={onDayChange}
      onMonthChange={onMonthChange}
      onAddDaily={onAddDaily}
      dailyAssignments={dailyAssignments}
      weeklyAssignments={weeklyAssignments}
    />
  );
}

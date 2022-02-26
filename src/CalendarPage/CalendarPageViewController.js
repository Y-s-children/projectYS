import { useState } from "react";
import CalendarPageView from "./CalendarPageView";

export function CalendarPageViewController() {
  return (
    <CalendarPageView
      selectedDate={selectedDate}
      markedDates={markedDates}
      dailyAssignments={dailyAssignments}
      weeklyAssignments={weeklyAssignments}
      onDayChange={onDayChange}
      onMonthChange={onMonthChange}
      onAddDailySchedule={onAddDailySchedule}
    />
  );
}

import { ContextProvider } from "./CalendarPageModel";
import CalendarPageViewModel from "./CalendarPageViewModel";

export default function CalendarPage() {
  return (
    <ContextProvider>
      <CalendarPageViewModel />
    </ContextProvider>
  );
}

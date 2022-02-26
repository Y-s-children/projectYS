import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// fake source
const dataSource = {
  "2022-01-09": [
    { id: "1", topic: "토플 영어" },
    { id: "2", topic: "Study with me 스트림" },
    { id: "3", topic: "컴활1기" },
  ],
  "2022-01-30": [
    { id: "1", topic: "토플 영어" },
    { id: "2", topic: "Study with me 스트림" },
    { id: "3", topic: "인터넷 강의 신청" },
  ],
  "2022-02-09": [
    { id: "1", topic: "토플 영어" },
    { id: "2", topic: "Study with me 스트림" },
    { id: "3", topic: "컴활1기" },
  ],
  "2022-02-11": [
    { id: "1", topic: "토플 영어" },
    { id: "2", topic: "Study with me 스트림" },
    { id: "3", topic: "인터넷 강의 신청" },
  ],
};

const StateContext = createContext("");
const DispatchContext = createContext({});
const DailyScheduleContext = createContext([]);
const WeeklyScheduleContext = createContext([]);

export const useDate = () => useContext(StateContext);
export const useDailySchedules = () => useContext(DailyScheduleContext);
export const useWeeklySchedules = () => useContext(WeeklyScheduleContext);
export const useDispatch = () => useContext(DispatchContext);

export const ContextProvider = ({ children }) => {
  const [date, setDate] = useState(getDate());
  const [daily, setDaily] = useState([]);
  useEffect(() => {
    // get data
    const data = dataSource[date] ? dataSource[date] : [];
    setDaily([...data]);
  }, [date]);
  const addDaily = (topic) => {
    let newId;
    // post data, this logic is fake
    if (dataSource[date]) {
      newId = dataSource[date][dataSource[date].length - 1].id + 1;
      dataSource[date].push({ id: newId, topic });
    } else {
      newId = 1;
      dataSource[date] = [{ id: newId, topic }];
    }
    setDaily((prev) => [...prev, { id: newId, topic }]);
  };

  return (
    <StateContext.Provider value={date}>
      <DailyScheduleContext.Provider value={daily}>
        <DispatchContext.Provider value={{ setDate, addDaily }}>
          {children}
        </DispatchContext.Provider>
      </DailyScheduleContext.Provider>
    </StateContext.Provider>
  );
};

const useDaily = (defaultValue) => {
  const [daily, setDaily] = useState(defaultValue);
  useEffect(() => {
    // get data
    const data = dataSource;
    const newDaily = data[date] ? data[date] : [];
    setDaily(newDaily);
  }, []);

  return [daily, setDaily];
};

const getDate = () => {
  const today = new Date();
  const [yyyy, mm, dd] = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  ];
  return `${yyyy}-${mm < 10 ? "0" + mm : mm}-${dd}`;
};

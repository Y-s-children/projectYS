import { v4 as uuidv4 } from "uuid";

export default class CalendarViewModel {
  static observers = [];

  static weeklyAssignments = [
    { id: "1", topic: "cpa" },
    { id: "2", topic: "사법고시" },
    { id: "3", topic: "대통령회의" },
  ];

  static assignments = {
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

  static subscribe(observer) {
    this.observers.push(observer);
    // return unsubscribe function
    return () => {
      this.observers = this.observers.filter((scribed) => scribed !== observer);
    };
  }

  static nofify(changeType) {
    console.log("helllo");
    this.observers.forEach((observer) => {
      observer(changeType);
    });
  }

  static getAssignmentsListByDate(date) {
    return !!this.assignments[date] ? this.assignments[date] : [];
  }

  static getWeeklyAssignments() {
    return !!this.weeklyAssignments ? this.weeklyAssignments : [];
  }

  static getMarkedDatesByMonth(date) {
    const markedDates = {};
    for (const property in this.assignments) {
      if (property.substring(0, 7) === date.substring(0, 7)) {
        const dots = this.assignments[property].map(({ id }) => ({
          key: id,
          color: "green",
        }));
        Object.assign(markedDates, { [property]: { dots } });
      }
    }
    return markedDates;
  }

  static addDailySchedule(date, topic) {
    const destArr = this.assignments[date];
    if (!!!destArr) {
      this.assignments[date] = [{ id: uuidv4(), topic }];
    } else {
      destArr.push({ id: uuidv4(), topic });
    }
  }

  static addWeeklySchedule(topic) {
    this.weeklyAssignments.push({ id: uuidv4(), topic });
  }

  static getDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDate();
    return `${yyyy}-${mm < 10 ? "0" + mm : mm}-${dd}`;
  }
}

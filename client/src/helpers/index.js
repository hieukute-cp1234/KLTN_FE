import dayjs from "dayjs";
import {
  TYPE_TIME_EFFORT,
  HOUR_OF_HOUR,
  DAY_OF_DAY,
  WEED_OF_WEEK,
  MONTH_OF_MONTH,
  FORMAT_DAY,
} from "../constants";

export const convertEffortByType = (typeEffort) => {
  switch (typeEffort) {
    case TYPE_TIME_EFFORT.HOUR:
      return HOUR_OF_HOUR.map((time) => ({ text: time, value: time }));
    case TYPE_TIME_EFFORT.DAY:
      return DAY_OF_DAY.map((time) => ({ text: time, value: time }));
    case TYPE_TIME_EFFORT.WEEK:
      return WEED_OF_WEEK.map((time) => ({ text: time, value: time }));
    case TYPE_TIME_EFFORT.MONTH:
      return MONTH_OF_MONTH.map((time) => ({ text: time, value: time }));
    default:
      return [];
  }
};

export const convertDate = (date) => {
  return date ? dayjs(date, FORMAT_DAY) : "";
};

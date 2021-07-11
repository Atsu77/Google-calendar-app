import React from "react";
import dayjs from "dayjs";
import { Typography } from "@material-ui/core";
import { isSameDay, isSameMonth, isFirstDay } from "../../services/calendar";

import * as styles from "./style.css";

const CalendarElement = ({ day }) => {
  const format = isFirstDay(day) ? "M月D日" : "D";
  const today = dayjs();
  const isCurrentMonth = isSameMonth(day, today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  const isToday = isSameDay(day, today);

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalendarElement;

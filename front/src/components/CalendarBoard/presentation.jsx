import React from "react";
import { GridList, Typography } from "@material-ui/core";
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement/presentation";

const days = ["日", "月", "火", "水", "木", "金", "土"];

export const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map((c) => (
          <li key={c.toISOString()} onClick={openAddScheduleDialog}>
            <CalendarElement day={c} month={month} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

import React from "react";
import GridList from '@material-ui/core/GridList';

import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";



const calendar = createCalendar();

export const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => (
          <li key={c.toISOString()}>
            <CalendarElement>{c.format("D")}</CalendarElement>
          </li>
        ))}
      </GridList>
    </div>
  );
};

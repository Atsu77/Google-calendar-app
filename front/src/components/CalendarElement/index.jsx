import React from "react";
import * as styles from "./styles.css"

const CalendarElement = ({children}) => {
  return(
    <div className={styles.element}>
      <div className={styles.date}>{children}</div>
    </div>
  )
}

export default CalendarElement;
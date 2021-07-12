import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Provider } from "react-redux";
import { createStore } from "redux";

import CalendarBoard from "./components/CalendarBoard/container";
import Navigation from "./components/Navigation/container";
import rootReducer from "./redux/rootReducer";
import AddScheduleDialog from "./components/AddScheduleDialog/container";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));

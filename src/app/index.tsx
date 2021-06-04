import React from "react";

import { Router as RouterHistory } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "../router";
import history from "../utils/history";
// import store from "../redux/store";

const App: React.FC = () => {
  return (
    <RouterHistory history={history}>
      {/* <Provider store={store}> */}
      <Router />
      {/* </Provider> */}
    </RouterHistory>
  );
};

export default App;

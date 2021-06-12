import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "../router";

import store from "../redux/store";
import Navigation from "../components/Navigation";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navigation />
        <Router />
      </Provider>
    </BrowserRouter>
  );
};

export default App;

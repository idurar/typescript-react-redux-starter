import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducer";

const logger = createLogger();
let middleware: Array<any> = [thunk];

let configStore: any = applyMiddleware(...middleware);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers: any =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, logger];
  configStore = composeEnhancers(applyMiddleware(...middleware));
}

const initialState: any = {};

const store = createStore(rootReducer, initialState, configStore);

export type RootStore = ReturnType<typeof rootReducer>;

export default store;

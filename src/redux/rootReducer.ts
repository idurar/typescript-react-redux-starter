import { combineReducers } from "redux";

import { reducer as crudReducer } from "./crud";

// Combine all reducers.

const rootReducer = combineReducers({
  crud: crudReducer,
});

export default rootReducer;

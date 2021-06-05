import { combineReducers } from "redux";

import { reducer as categoryReducer } from "./category";
import { reducer as imagesReducer } from "./images";

// Combine all reducers.

const rootReducer = combineReducers({
  category: categoryReducer,
  images: imagesReducer,
});

export default rootReducer;

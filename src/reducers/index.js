import { combineReducers } from "redux";
import { unsplashReducer } from "./photoReducer";

const rootReducer = combineReducers({
  unsplash: unsplashReducer
});

export default rootReducer;

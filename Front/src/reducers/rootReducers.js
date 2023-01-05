import { combineReducers } from "redux";
import user from "./userReducer";
import view from "./viewReducer";

const rootReducers = combineReducers({
  user,
  view,
});

export default rootReducers;

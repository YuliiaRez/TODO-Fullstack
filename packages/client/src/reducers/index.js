import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  task: tasksReducer,
});

export default rootReducer;

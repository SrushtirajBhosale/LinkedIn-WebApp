import { combineReducers } from "redux";
import userReducer from './userReducer';
import articleUpdator from "./articleUpdator";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleUpdator,
});

export default rootReducer;
import { combineReducers } from "redux";
import userReducer from "./users/reducer";
import roomReducer from "./room/reducer";

export default combineReducers({
  userdata: userReducer,
  room: roomReducer
});

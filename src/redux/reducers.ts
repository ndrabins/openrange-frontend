import { combineReducers } from "redux";

import { systemReducer } from "./system/reducer";
import { chatReducer } from "./chat/reducer";

export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
});

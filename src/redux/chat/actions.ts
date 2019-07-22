// src/store/chat/actions.ts
import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
} from "./types";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../redux";

export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

export const thunkSendMessage = (
  exampleData: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  dispatch({
    type: "EXAMPLE_TYPE",
    payload: exampleData,
  });
};

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}

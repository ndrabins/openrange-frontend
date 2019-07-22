import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunkMiddleware];
const middleWareEnchancer = applyMiddleware(...middleware);

const store = createStore(
  persistedReducer,
  composeWithDevTools(middleWareEnchancer)
);

const persistor = persistStore(store);

export { store, persistor };

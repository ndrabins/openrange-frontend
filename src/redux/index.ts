import { rootReducer } from "./reducers";

export { store, persistor } from "./store";

export type AppState = ReturnType<typeof rootReducer>;

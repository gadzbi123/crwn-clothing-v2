import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { createLogger, logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { loggerMiddleware } from "./middlewares";
import { rootReducer } from "./root-reducer";
const persistConfig = { key: "root", storage, whitelist: ["cart"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevToolsDevelopmentOnly(
  applyMiddleware(thunk)
);
export default () => {
  const store = createStore(persistedReducer, undefined, composeEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};

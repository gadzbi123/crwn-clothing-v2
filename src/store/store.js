import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { logger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const persistConfig = { key: "root", storage, whitelist: ["cart"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();
const composeEnhancers = composeWithDevToolsDevelopmentOnly(
  applyMiddleware(...[logger, saga])
);

export default () => {
  const store = createStore(persistedReducer, undefined, composeEnhancers);
  saga.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

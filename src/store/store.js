import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) return;

//   console.log("type:", action.type);
//   console.log("payload:", action.payload);
//   console.log("curr state:", store.getState());

//   next(action);
//   console.log("next state:", store.getState());
// };

const middleWares = [logger];
const composedEnhancements = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancements);

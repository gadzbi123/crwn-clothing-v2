import { createAction } from "../../utils/reducer/reducer.utils";
import { UserActionsTypes } from "./user.types";
export const setCurrentUser = (user) =>
  createAction(UserActionsTypes.setCurrentUser, user);

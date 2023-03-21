import { UserActionsTypes } from "./user.types";
export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionsTypes.setCurrentUser:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

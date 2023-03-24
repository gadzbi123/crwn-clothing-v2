import { UserActionsTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case UserActionsTypes.checkUserSession:
      return { ...state };
    case UserActionsTypes.googleSignInStart:
    case UserActionsTypes.emailSignInStart:
    case UserActionsTypes.signUpStart:
    case UserActionsTypes.signOutStart:
      return { ...state, isLoading: true };
    case UserActionsTypes.signUpSuccess:
    case UserActionsTypes.signInSuccess:
      return { ...state, isLoading: false, currentUser: payload };
    case UserActionsTypes.signOutSuccess:
      return { ...state, isLoading: false, currentUser: null };
    case UserActionsTypes.signUpFailure:
    case UserActionsTypes.signInFailure:
    case UserActionsTypes.signOutFailure:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

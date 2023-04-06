import { User } from "firebase/auth";
import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
} from "./user.action";
import { UserActionsTypes } from "./user.types";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) return { ...state };
  if (signOutSuccess.match(action)) {
    return { ...state, isLoading: false, currentUser: null };
  }
  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
  /*
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
*/
};

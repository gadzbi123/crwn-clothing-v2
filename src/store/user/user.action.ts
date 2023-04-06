import {
  Action,
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { UserActionsTypes } from "./user.types";

import { User } from "firebase/auth";
import {
  AdditionalInformation,
  UserData,
} from "../../utils/firebase/firebase.utils";

export type CheckUserSession = Action<UserActionsTypes.checkUserSession>;

export type GoogleSignInStart = Action<UserActionsTypes.googleSignInStart>;

export type EmailSignInStart = ActionWithPayload<
  UserActionsTypes.emailSignInStart,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  UserActionsTypes.signInSuccess,
  UserData
>;

export type SignInFailed = ActionWithPayload<
  UserActionsTypes.signInFailure,
  Error
>;

export type SignUpStart = ActionWithPayload<
  UserActionsTypes.signUpStart,
  { email: string }
>;

export type SignUpSuccess = ActionWithPayload<
  UserActionsTypes.signUpSuccess,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type SignUpFailed = ActionWithPayload<
  UserActionsTypes.signUpFailure,
  Error
>;

export type SignOutStart = Action<UserActionsTypes.signOutStart>;

export type SignOutSuccess = Action<UserActionsTypes.signOutSuccess>;

export type SignOutFailed = ActionWithPayload<
  UserActionsTypes.signOutFailure,
  Error
>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(UserActionsTypes.checkUserSession)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(UserActionsTypes.googleSignInStart)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(UserActionsTypes.emailSignInStart, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserData): SignInSuccess =>
    createAction(UserActionsTypes.signInSuccess, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    createAction(UserActionsTypes.signInFailure, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(UserActionsTypes.signUpStart, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(UserActionsTypes.signUpSuccess, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    createAction(UserActionsTypes.signUpFailure, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => createAction(UserActionsTypes.signOutStart)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(UserActionsTypes.signOutSuccess)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(UserActionsTypes.signOutFailure, error)
);

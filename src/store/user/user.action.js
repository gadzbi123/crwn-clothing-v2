import { createAction } from "../../utils/reducer/reducer.utils";
import { UserActionsTypes } from "./user.types";
export const setCurrentUser = (user) =>
  createAction(UserActionsTypes.setCurrentUser, user);

export const checkUserSession = () =>
  createAction(UserActionsTypes.checkUserSession);
export const googleSignInStart = () =>
  createAction(UserActionsTypes.googleSignInStart);
export const emailSignInStart = (email, password) =>
  createAction(UserActionsTypes.emailSignInStart, { email, password });
export const signInSuccess = (user) =>
  createAction(UserActionsTypes.signInSuccess, user);
export const signInFailure = (error) =>
  createAction(UserActionsTypes.signInFailure, error);
export const signOutStart = () => createAction(UserActionsTypes.signOutStart);
export const signOutSuccess = () =>
  createAction(UserActionsTypes.signOutSuccess);
export const signOutFailure = (error) =>
  createAction(UserActionsTypes.signOutFailure, error);
export const signUpStart = (email, password, displayName) =>
  createAction(UserActionsTypes.signUpStart, { email, password, displayName });
export const signUpSuccess = (user) =>
  createAction(UserActionsTypes.signUpSuccess, user);
export const signUpFailure = (error) =>
  createAction(UserActionsTypes.signUpFailure, error);

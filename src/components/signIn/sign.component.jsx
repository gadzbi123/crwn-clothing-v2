import { getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  createWithEmailAndPassword,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import "./sign.styles.scss";
const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Sign = ({ type }) => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;
  const [signIn, setSignIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (type === "In") setSignIn(true);
  }, []);
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);
  const logInGooglePopup = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const resetFormFields = () => {
    setFormValues(defaultFormValues);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await createWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth({ ...response.user, displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
    }
  };
  return (
    <div className="sign">
      <h2>I {signIn ? "already" : "don't"} have an account</h2>
      <p>Sign {type} with email and password</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-boxes">
          {!signIn && (
            <input
              required
              type="text"
              placeholder="Display Name"
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />
          )}
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          {!signIn && (
            <input
              required
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
            />
          )}
        </div>
        <div className="buttons">
          {signIn && (
            <button onClick={signInWithGoogleRedirect}>Sign In</button>
          )}
          {!signIn && <button type="submit">Sign Up</button>}
          {signIn && (
            <button className="highlight" onClick={logInGooglePopup}>
              Sign In with Google
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default Sign;

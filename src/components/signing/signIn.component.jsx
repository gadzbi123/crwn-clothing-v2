import { getRedirectResult } from "firebase/auth";
import { useState } from "react";

import {
  signInEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import "./signIn.styles.scss";

const defaultFormValues = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;

  const logInGooglePopup = async () => {
    await signInWithGooglePopup();
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
    try {
      const { user } = await signInEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="sign-up">
      <h2>Already have an account?</h2>
      <p>Sign in with email and password</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-boxes">
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
        </div>
        <div className="buttons">
          <button type="submit">Sign In</button>
          <button
            type="button"
            className="highlight"
            onClick={logInGooglePopup}>
            Sign In with Google
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;

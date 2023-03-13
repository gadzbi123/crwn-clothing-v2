import { getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  createWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./signUp.styles.scss";
const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password, confirmPassword } = formValues;

  // useEffect(() => {
  //   const doSth = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   doSth();
  // }, []);

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
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <h2>I don't have an account</h2>
      <p>Sign up with email and password</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-boxes">
          <input
            required
            type="text"
            placeholder="Display Name"
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
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
          <input
            required
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
        </div>
        <div className="buttons">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;

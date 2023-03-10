import { useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign.styles.scss";
const Sign = ({ type }) => {
  const [signIn, setSignIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (type === "In") setSignIn(true);
  }, []);

  const logInGooglePopup = async (signIn) => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div className="sign">
      <h2>I {signIn ? "already" : "don't"} have an account</h2>
      <p>Sign {type} with email and password</p>
      <div className="input-boxes">
        {!signIn && <input type="text" placeholder="Display Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {!signIn && <input type="password" placeholder="Confirm Password" />}
      </div>
      <div className="buttons">
        <button type="submit">Sign {type}</button>
        {signIn && (
          <button className="highlight" onClick={logInGooglePopup}>
            Sign In with Google
          </button>
        )}
      </div>
    </div>
  );
};
export default Sign;

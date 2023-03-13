import "./sign.styles.scss";
import SignIn from "./signIn.component";
import SignUp from "./signUp.component";
const Sign = () => {
  return (
    <div className="sign-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Sign;

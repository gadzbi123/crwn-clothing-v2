import Sign from "./sign.component";
import "./signIn.styles.scss";
const SignIn = () => {
  return (
    <div className="sign-in-container">
      <Sign type="In" />
      <Sign type="Up" />
    </div>
  );
};
export default SignIn;

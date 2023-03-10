import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <CrownLogo className="logo" />
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;

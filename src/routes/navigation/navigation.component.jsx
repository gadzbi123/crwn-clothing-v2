import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import CardIcon from "../../components/card-icon/card-icon.component";
import { CardContext } from "../../contexts/card.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen } = useContext(CardContext);
  return (
    <>
      <div className="navigation-container">
        <CrownLogo className="logo" />
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          {!currentUser && <Link to="/sign">SignIn</Link>}
          {currentUser && (
            <Link to="/" onClick={signOutUser}>
              Sign Out
            </Link>
          )}
          <CardIcon />
        </div>
        {isCardOpen && <CardDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;

import { Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.scss";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { AppState } from "../../state";
import { signOutUser } from "../../utils/firebase.utils";
import { logoutUser } from "../../state/slice/userSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: AppState) => state.userState.isAuthenticated);

  const handleSignOut = () => {
    console.log('logout')
    signOutUser(); // Assuming this function signs the user out (e.g., clears session, etc.)
    dispatch(logoutUser());
  };

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
          <img src={CrwnLogo} alt="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {isAuthenticated ? 
          (<span className="nav-link" onClick={handleSignOut}>
            SIGN OUT
          </span>)
          : (<Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>)}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navigation;

import { Link } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
          <img src={CrwnLogo} alt="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <CartIcon />
      </div>
    </div>
  );
};

export default Navigation;

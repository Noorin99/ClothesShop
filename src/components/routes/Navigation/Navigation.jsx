import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/user";
import { ToggleCartContext } from "../../../contexts/toggleCart";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropDown from "../../cart-dropdown/cart-dropdown";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {toggle} = useContext(ToggleCartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
          <CartIcon />
        </div>
        {toggle && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

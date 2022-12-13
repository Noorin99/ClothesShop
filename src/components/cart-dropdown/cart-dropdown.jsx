import "./cart-dropdown.scss";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useContext } from "react";
import { ToggleCartContext } from "../../contexts/toggleCart";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(ToggleCartContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `checkout`;
    navigate(path);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button onClick={routeChange}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropDown;

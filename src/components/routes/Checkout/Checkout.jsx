import "./Checkout.scss";
import CheckoutItem from "../../checkout-item/checkout-item";
import { useContext, useEffect } from "react";
import { ToggleCartContext } from "../../../contexts/toggleCart";

const Checkout = () => {
  const { cartItems, total, setTotal } = useContext(ToggleCartContext);

  const totalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalAmount += (cartItems[i].quantity * cartItems[i].price)
    }
    return totalAmount;
  };

  const totalAmountHandler = () => {
   setTotal(totalAmount())
  }

  useEffect(() => {
    totalAmountHandler();
  });

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>

      {cartItems.map((product) => {
        return <CheckoutItem key={product.id} product={product} />;
      })}
      <span className="total">Total:{total}</span>
    </div>
  );
};

export default Checkout;

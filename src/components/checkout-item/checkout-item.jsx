import "./checkout-item.scss";
import { useContext } from "react";
import { ToggleCartContext } from "../../contexts/toggleCart";

const CheckoutItem = ({ product }) => {
  const { name, price, quantity, imageUrl } = product;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(ToggleCartContext);

  const clearItemHandler = () => {
    clearItemFromCart(product);
  };

  const addItemHandler = () => {
    addItemToCart(product)
  }  
  
  const removeItemHandler = () => {
    removeItemToCart(product)
  }

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}> &#10095; </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        {" "}
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

import "./product-card.scss";
import { useContext} from "react";
import { ToggleCartContext } from "../../contexts/toggleCart";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart, quantity, setQuantity } =
    useContext(ToggleCartContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setQuantity(quantity + 1);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button onClick={addProductToCart}>Add to card</button>
    </div>
  );
};

export default ProductCard;

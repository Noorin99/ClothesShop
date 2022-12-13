import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeDefinitlyCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};


export const ToggleCartContext = createContext({
  toggle: false,
  setToggle: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemToCart: () => null,
  clearItemFromCart: () => null,
  total: 0,
  setTotal: () => null,
});

export const ToggleCartProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (ItemToRemove) => {
    setCartItems(removeCartItem(cartItems, ItemToRemove));
  };

  const clearItemFromCart = (ItemToRemove) => {
    setCartItems(removeDefinitlyCartItem(cartItems, ItemToRemove));
  };

  const value = {
    toggle,
    setToggle,
    cartItems,
    addItemToCart,
    quantity,
    setQuantity,
    removeItemToCart,
    clearItemFromCart,
    total,
    setTotal
  };

  return (
    <ToggleCartContext.Provider value={value}>
      {children}
    </ToggleCartContext.Provider>
  );
};

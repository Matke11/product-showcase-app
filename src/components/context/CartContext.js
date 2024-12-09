import React, { createContext, useContext, useState } from "react";
import data from "../../data/data.json";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(data.cart);
  const [quantity, setQuantity] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [headerAddToCartVisible, setHeaderAddToCartVisible] = useState(false);

  const handleAddToCart = () => {
    setCartData((prevCartData) => ({
      ...prevCartData,
      items: prevCartData.items + 1,
    }));
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        handleAddToCart,
        updateQuantity,
        quantity,
        animate,
        headerAddToCartVisible,
        setHeaderAddToCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

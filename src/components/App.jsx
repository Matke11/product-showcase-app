import React from "react";
import Header from "./Header";
import Product from "./Product";
import data from "../data/data.json";

function App() {
  const articleData = data.article;
  const cartData = data.cart;
  const userData = data.user;
  return (
    <div>
      <Header />
      <Product data={articleData} />
    </div>
  );
}

export default App;

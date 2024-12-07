import React from "react";
import Header from "./layouts/header/Header";
import Product from "./product/Product";
import data from "../data/data.json";

function App() {
  const articleData = data.article;
  const cartData = data.cart;
  const userData = data.user;
  const productTitle = articleData.title;
  return (
    <div>
      <Header
        productTitle={productTitle}
        cartData={cartData}
        userData={userData}
      />
      <Product data={articleData} />
    </div>
  );
}

export default App;

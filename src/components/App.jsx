import React from "react";
import Header from "./layouts/header/Header";
import Product from "./product/Product";
import data from "../data/data.json";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#9500ae",
    },
  },
});

function App() {
  const articleData = data.article;
  const cartData = data.cart;
  const userData = data.user;
  const productTitle = articleData.title;
  return (
    <ThemeProvider theme={theme}>
      <Header
        productTitle={productTitle}
        cartData={cartData}
        userData={userData}
      />
      <Product data={articleData} />
    </ThemeProvider>
  );
}

export default App;

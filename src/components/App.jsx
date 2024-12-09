import React from "react";
import Header from "./layouts/header/Header";
import Product from "./product/Product";
import data from "../data/data.json";
import { CartContextProvider } from "./context/CartContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink, purple } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#EFEFEF",
        },
      },
    },
  },
  palette: {
    primary: {
      main: pink["A400"],
    },
    secondary: {
      main: purple["800"],
    },
  },
});

function App() {
  const articleData = data.article;
  const userData = data.user;
  const productTitle = articleData.title;
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Header productTitle={productTitle} userData={userData} />
        <Product productData={articleData} />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;

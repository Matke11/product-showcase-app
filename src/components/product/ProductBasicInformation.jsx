import React, { useRef, useEffect } from "react";
import IconsComponent from "../ui/IconsComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import AddToCart from "./AddToCartForm";
import Typography from "@mui/material/Typography";
import { formatPrice } from "../../utils/formatters";
import { useTheme } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Link from "@mui/material/Link";
import { orange } from "@mui/material/colors";
import { useCartContext } from "../context/CartContext";

const ProductTitle = ({ productTitle, supplierLink, supplierName }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          fontSize: "1rem",
        }}
      >
        {productTitle ? productTitle : "Product title unavailable"}
      </Typography>
      {supplierLink && (
        <Typography
          variant="body2"
          component="span"
          sx={{
            color: "gray",
          }}
        >
          by{" "}
          <Link
            href={supplierLink}
            target="_blank"
            style={{
              color: theme.palette.secondary.main,
              textDecoration: "none",
              fontSize: "0.75rem",
            }}
          >
            {supplierName ? supplierName : "Supplier name unavailable"}
          </Link>
        </Typography>
      )}
    </Box>
  );
};

const ProductRating = ({ stars = 0 }) => (
  <Box>
    <Grid container spacing={1}>
      <Rating
        name="customized-rating"
        value={stars}
        icon={
          <IconsComponent
            icon="star-filled"
            size="18px"
            color={orange["A400"]}
          />
        }
        emptyIcon={
          <IconsComponent icon="star-filled" size="18px" color="divider" />
        }
        readOnly
      />
    </Grid>
  </Box>
);

const ProductPrice = ({
  price,
  currency = "EUR",
  vatPercent,
  transportCosts,
}) => (
  <Box>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1rem",
        fontWeight: 500,
        display: "inline",
      }}
    >
      {price ? formatPrice(price) : "Price unavailable"} {currency}
    </Typography>{" "}
    <Typography
      variant="body2"
      sx={{
        fontSize: "0.9rem",
        color: "gray",
        display: "inline",
      }}
    >
      +{" "}
      {transportCosts
        ? formatPrice(transportCosts)
        : "Shipping cost unavailable"}{" "}
      {currency} shipping{" "}
      <IconsComponent icon="discount" size="18px" color="black" />{" "}
      {vatPercent &&
        `all prices
      incl. ${vatPercent}% taxes`}
    </Typography>
  </Box>
);

const ProductBasicInformation = ({
  productTitle,
  currency,
  unit,
  price,
  stars,
  supplierLink,
  supplierName,
  transportCosts,
  vatPercent,
}) => {
  const { setHeaderAddToCartVisible } = useCartContext();
  const addToCartRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderAddToCartVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (addToCartRef.current) {
      observer.observe(addToCartRef.current);
    }

    return () => {
      if (addToCartRef.current) {
        observer.unobserve(addToCartRef.current);
      }
    };
  }, [setHeaderAddToCartVisible]);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      <Stack spacing={2} sx={{ minHeight: "100%" }}>
        <ProductTitle
          productTitle={productTitle}
          supplierLink={supplierLink}
          supplierName={supplierName}
        />
        <ProductRating stars={stars} />
        <ProductPrice
          price={price}
          currency={currency}
          vatPercent={vatPercent}
          transportCosts={transportCosts}
        />

        <Box
          sx={{ position: { xs: "static", md: "absolute" }, bottom: 0 }}
          ref={addToCartRef}
        >
          <AddToCart unit={unit} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductBasicInformation;

import React from "react";
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
        {productTitle}
      </Typography>
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
          {supplierName}
        </Link>
      </Typography>
    </Box>
  );
};

const ProductRating = ({ stars }) => (
  <Box>
    <Grid container spacing={1}>
      <Rating
        name="customized-rating"
        value={stars}
        icon={<IconsComponent icon="star-filled" size="18px" />}
        emptyIcon={<IconsComponent icon="star" size="18px" />}
        sx={{ color: "#ff6d75" }}
        readOnly
      />
    </Grid>
  </Box>
);

const ProductPrice = ({ price, currency, vatPercent, transportCosts }) => (
  <Box>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1rem",
        fontWeight: 500,
        display: "inline",
      }}
    >
      {formatPrice(price)} {currency}
    </Typography>{" "}
    <Typography
      variant="body2"
      sx={{
        fontSize: "0.9rem",
        color: "gray",
        display: "inline",
      }}
    >
      + {formatPrice(transportCosts)} {currency} shipping{" "}
      <IconsComponent icon="discount" size="18px" /> all prices incl.{" "}
      {vatPercent}% taxes
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

        <Box sx={{ position: { xs: "static", md: "absolute" }, bottom: 0 }}>
          <AddToCart unit={unit} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductBasicInformation;

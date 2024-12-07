import React from "react";
import IconsComponent from "../ui/IconsComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import AddToCart from "./AddToCartForm";

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
  const formatPrice = (priceToFormat) => {
    return new Intl.NumberFormat("de-DE", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(priceToFormat);
  };
  return (
    <Box component="section" sx={{ p: 3 }}>
      <Stack spacing={2}>
        <div>
          <p>{productTitle}</p>
          <span>
            by <a href={supplierLink}>{supplierName}</a>
          </span>
        </div>
        <div>
          <Grid container spacing={1}>
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
          </Grid>
        </div>
        <div>
          <p>
            {formatPrice(price)} {currency}{" "}
            <span>
              + {transportCosts.toFixed(2)} {currency} shipping{" "}
              <IconsComponent icon="discount" /> all prices incl. {vatPercent}%
              taxes
            </span>
          </p>
        </div>

        <Grid container alignItems="center">
          <AddToCart unit={unit} />
        </Grid>
      </Stack>
    </Box>
  );
};

export default ProductBasicInformation;

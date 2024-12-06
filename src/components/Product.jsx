import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ProductBasicInformation from "./ProductBasicInformation";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import ProductInformationCards from "./ProductInformationCards";
import ProductPricingAndShipping from "./ProductPricingAndShipping";

const Product = ({ data }) => {
  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "white",
        }}
      >
        <Grid size={{ xs: 6, md: 5 }}>
          <p>Milan</p>
        </Grid>
        <Grid size={{ xs: 6, md: 7 }}>
          <ProductBasicInformation />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <ProductDescription
          descriptionShort={data.description_short}
          descriptionLong={data.description_long}
        />
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6 }}>
          <ProductInformationCards title="Details">
            <ProductDetails
              features={data.features}
              attachments={data.attachments}
              keywords={data.keywords}
            />
          </ProductInformationCards>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <ProductInformationCards title="Price & Shipping">
            <ProductPricingAndShipping
              priceBreaks={data.price_breaks}
              minimumOrder={data.minimum_order_quantity}
              shippingCost={data.transport_costs}
              deliveryTime={data.delivery_time}
              currency={data.currency}
            />
          </ProductInformationCards>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;

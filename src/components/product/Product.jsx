import React from "react";
import Grid from "@mui/material/Grid2";
import ProductBasicInformation from "./ProductBasicInformation";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import ProductInformationCards from "./ProductInformationCards";
import ProductPricingAndShipping from "./ProductPricingAndShipping";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProductImages from "./ProductImages";

const Product = ({ productData }) => {
  return (
    <>
      <Box sx={{ bgcolor: "white" }}>
        <Container
          sx={{
            pt: { xs: "100px", md: "100px" },
            mx: 0,
            px: 2,
            pb: 5,
          }}
          maxWidth="xl"
        >
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "white",
            }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <ProductImages images={productData.images} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProductBasicInformation
                productTitle={productData.title}
                currency={productData.currency}
                unit={productData.unit}
                price={productData.price}
                stars={productData.stars}
                supplierLink={productData.supplier_link}
                supplierName={productData.supplier_name}
                transportCosts={productData.transport_costs}
                vatPercent={productData.vat_percent}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container sx={{ mx: 0, px: 2 }} maxWidth="xl">
          <Grid container spacing={0}>
            <Grid xs={12}>
              <ProductDescription
                descriptionShort={productData.description_short}
                descriptionLong={productData.description_long}
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ mx: 0, px: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProductInformationCards title="Details">
                <ProductDetails
                  features={productData.features}
                  attachments={productData.attachments}
                  keywords={productData.keywords}
                />
              </ProductInformationCards>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProductInformationCards title="Price & Shipping">
                <ProductPricingAndShipping
                  priceBreaks={productData.price_breaks}
                  minimumOrder={productData.minimum_order_quantity}
                  shippingCost={productData.transport_costs}
                  deliveryTime={productData.delivery_time}
                  currency={productData.currency}
                  unit={productData.unit}
                />
              </ProductInformationCards>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Product;

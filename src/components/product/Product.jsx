import React from "react";
import Grid from "@mui/material/Grid2";
import ProductBasicInformation from "./ProductBasicInformation";
import ProductDescription from "./ProductDescription";
import ProductDetails from "./ProductDetails";
import ProductInformationCards from "./ProductInformationCards";
import ProductPricingAndShipping from "./ProductPricingAndShipping";
import Container from "@mui/material/Container";
import ProductImages from "./ProductImages";

const Product = ({ data }) => {
  return (
    <>
      <Container sx={{ mt: { xs: "100px", md: "100px" } }} maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: "white",
          }}
        >
          <Grid item size={{ xs: 12, md: 6 }}>
            <ProductImages images={data.images} />
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <ProductBasicInformation
              productTitle={data.title}
              currency={data.currency}
              unit={data.unit}
              price={data.price}
              stars={data.stars}
              supplierLink={data.supplier_link}
              supplierName={data.supplier_name}
              transportCosts={data.transport_costs}
              vatPercent={data.vat_percent}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <ProductDescription
              descriptionShort={data.description_short}
              descriptionLong={data.description_long}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <ProductInformationCards title="Details">
              <ProductDetails
                features={data.features}
                attachments={data.attachments}
                keywords={data.keywords}
              />
            </ProductInformationCards>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <ProductInformationCards title="Price & Shipping">
              <ProductPricingAndShipping
                priceBreaks={data.price_breaks}
                minimumOrder={data.minimum_order_quantity}
                shippingCost={data.transport_costs}
                deliveryTime={data.delivery_time}
                currency={data.currency}
                unit={data.unit}
              />
            </ProductInformationCards>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Product;

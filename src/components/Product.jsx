import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ProductBasicInformation from "./ProductBasicInformation";

const Product = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "white",
          padding: "40px 0",
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
        <Grid size={{ xs: 12, md: 12 }}>
          <p>Milan</p>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6 }}>
          <p>Milan</p>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <p>Matic</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;

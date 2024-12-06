import React from "react";
import Box from "@mui/material/Box";

const ProductDescription = ({ descriptionShort, descriptionLong }) => {
  return (
    <Box component="section" sx={{ p: 3 }}>
      <p>Description</p>
      <p>{descriptionShort}</p>
      <p>{descriptionLong}</p>
    </Box>
  );
};

export default ProductDescription;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProductDescription = ({ descriptionShort, descriptionLong }) => {
  return (
    <Box component="section" sx={{ py: 3 }}>
      <Typography
        variant="h6"
        sx={{
          textTransform: "uppercase",
          color: "primary.main",
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      >
        Description
      </Typography>

      {descriptionShort || descriptionLong ? (
        <>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            {descriptionShort}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {descriptionLong}
          </Typography>
        </>
      ) : (
        "No description for this product"
      )}
    </Box>
  );
};

export default ProductDescription;

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ProductInformationCards = ({ title, children }) => {
  return (
    <Box component="section" sx={{ py: 3 }}>
      <Card variant="outlined">
        <CardContent>
          {title && (
            <>
              <Typography
                variant="h6"
                sx={{
                  textTransform: "uppercase",
                  color: "primary.main",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {title}
              </Typography>
              <Divider sx={{ mt: 2 }} />
            </>
          )}
          <div>{children}</div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductInformationCards;

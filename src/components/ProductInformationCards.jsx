import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ProductInformationCards = ({ title, children }) => {
  return (
    <Box component="section" sx={{ p: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {title}
          </Typography>
          <Divider />
          <div>{children}</div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductInformationCards;

import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

const ProductPricingAndShipping = ({
  priceBreaks,
  minimumOrder,
  shippingCost,
  deliveryTime,
  currency,
}) => {
  return (
    <Box component="section">
      <Box>
        <Typography sx={{ color: "text.secondary", mb: "0" }}>
          &#x2022; Minimum order: {minimumOrder} PCE
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "0" }}>
          &#x2022; Shipping: {shippingCost} {currency}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "0" }}>
          &#x2022; Delivery: {deliveryTime} days
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ color: "text.secondary", mb: "0" }}>
          Price breaks
        </Typography>
        <List>
          {Object.entries(priceBreaks).map(([quantity, totalPrice]) => {
            const unitPrice = (totalPrice / quantity).toFixed(2);
            return (
              <div key={quantity}>
                <ListItem disablePadding>
                  <ListItemText primary={`ex ${quantity} PCE`} />
                  <ListItemText primary={`${unitPrice} EUR/PCE`} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ProductPricingAndShipping;

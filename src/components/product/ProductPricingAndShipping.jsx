import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import DottedList from "./DottedList";
import { formatPrice } from "../../utils/formatters";

const ProductPricingAndShipping = ({
  priceBreaks,
  minimumOrder,
  shippingCost,
  deliveryTime,
  currency,
  unit,
}) => {
  const listObject = {
    "Minimum order": `${minimumOrder} ${unit}`,
    Shipping: `${formatPrice(shippingCost)} ${currency}`,
    Delivery: `${deliveryTime} days`,
  };

  return (
    <Box component="section">
      <DottedList list={listObject} />
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ color: "text.secondary", mb: "0" }}>
          Price breaks
        </Typography>
        <List>
          {Object.entries(priceBreaks).map(([quantity, totalPrice]) => {
            const unitPrice = (totalPrice / quantity).toFixed(2);
            return (
              <Box key={quantity}>
                <ListItem disablePadding>
                  <ListItemText primary={`ex ${quantity} ${unit}`} />
                  <ListItemText
                    primary={`${formatPrice(unitPrice)} ${currency}/${unit}`}
                  />
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default ProductPricingAndShipping;

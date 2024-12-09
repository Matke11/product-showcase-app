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
      <Box
        sx={{
          mt: 4,
        }}
      >
        <Typography sx={{ color: "text.secondary", mb: "0" }}>
          Price breaks
        </Typography>
        <List
          sx={{
            display: "inline-flex",
            flexDirection: "column",
          }}
        >
          {Object.entries(priceBreaks).map(
            ([quantity, totalPrice], index, value) => {
              const unitPrice = (totalPrice / quantity).toFixed(2);
              return (
                <Box key={quantity}>
                  <Divider />
                  <ListItem
                    sx={{
                      py: 0,
                      display: "flex",
                      gap: { sm: 1, md: 4 },
                      textAlign: "right",
                    }}
                  >
                    <ListItemText primary={`ex ${quantity} ${unit}`} />
                    <ListItemText
                      primary={`${formatPrice(unitPrice)} ${currency}/${unit}`}
                    />
                  </ListItem>
                  {value.length === index + 1 && <Divider />}
                </Box>
              );
            }
          )}
        </List>
      </Box>
    </Box>
  );
};

export default ProductPricingAndShipping;

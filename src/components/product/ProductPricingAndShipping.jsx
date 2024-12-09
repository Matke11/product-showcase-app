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
  currency = "EUR",
  unit = "PCE",
}) => {
  const listObject = {
    "Minimum order": `${minimumOrder ? minimumOrder : "/"} ${unit}`,
    Shipping: `${shippingCost ? formatPrice(shippingCost) : "/"} ${currency}`,
    Delivery: `${deliveryTime ? deliveryTime : "/"} days`,
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
          {priceBreaks && Object.keys(priceBreaks).length > 0
            ? Object.entries(priceBreaks).map(
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
                        <ListItemText
                          primary={`ex ${quantity ? quantity : "/"} ${unit}`}
                        />
                        <ListItemText
                          primary={`${unitPrice ? formatPrice(unitPrice) : "/"} ${currency}/${unit}`}
                        />
                      </ListItem>
                      {value.length === index + 1 && <Divider />}
                    </Box>
                  );
                }
              )
            : "No price break information"}
        </List>
      </Box>
    </Box>
  );
};

export default ProductPricingAndShipping;

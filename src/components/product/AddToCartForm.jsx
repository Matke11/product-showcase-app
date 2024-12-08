import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconsComponent from "../ui/IconsComponent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCartContext } from "../context/CartContext";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    width: "40px",
    height: "30px",
    padding: "0 8px",
    textAlign: "center",
    fontSize: "14px",
    MozAppearance: "textfield",
  },
  "& input[type=number]": {
    WebkitAppearance: "none",
    MozAppearance: "textfield",
    appearance: "textfield",
  },
});

const StyledAddCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  marginLeft: "30px",
  textTransform: "none",
  height: "30px",
}));

const AddToCart = ({ unit = "PCE" }) => {
  const { quantity, handleAddToCart, updateQuantity } = useCartContext();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <StyledTextField
        id="outlined-number"
        type="number"
        value={quantity}
        onChange={(e) => updateQuantity(e.target.value)}
        sx={{
          marginRight: "10px",
        }}
      />
      <Typography
        variant="caption"
        gutterBottom
        sx={{ display: "block", lineHeight: "0", margin: "0" }}
        color="textPrimary"
      >
        {unit}
      </Typography>
      <StyledAddCartButton onClick={handleAddToCart}>
        <IconsComponent icon="add" size="20px" color="white" />
        Add to cart
      </StyledAddCartButton>
    </Box>
  );
};

export default AddToCart;

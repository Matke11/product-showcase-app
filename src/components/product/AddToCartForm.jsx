import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconsComponent from "../ui/IconsComponent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    width: "40px",
    height: "30px",
    padding: "0 8px",
    textAlign: "center",
    fontSize: "14px",
    "-moz-appearance": "textfield",
  },
  "& input[type=number]": {
    "-webkit-appearance": "none",
    "-moz-appearance": "textfield",
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
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <StyledTextField
        id="outlined-number"
        type="number"
        defaultValue={1}
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
      <StyledAddCartButton>
        <IconsComponent icon="add" size="20px" />
        Add to cart
      </StyledAddCartButton>
    </Box>
  );
};

export default AddToCart;

import React from "react";
import IconsComponent from "./ui/IconsComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ProductBasicInformation = () => {
  return (
    <Box>
      <Stack spacing={2}>
        <div>
          <p>Lorem Ipsum Dolor Sit Amet 4552</p>
          <span>by Supplier expeteur sint</span>
        </div>
        <div>
          <Grid container spacing={1}>
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
            <IconsComponent icon="star" />
          </Grid>
        </div>
        <div>
          <p>
            2.598,00 EUR{" "}
            <span>
              + 34,00 EUR shipping <IconsComponent icon="discount" /> all prices
              incl. 10% taxes
            </span>
          </p>
        </div>

        <Grid container alignItems="center">
          <TextField
            id="outlined-number"
            type="number"
            value={1}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{
              marginRight: "10px",
            }}
          />
          <span>PCE</span>
          <Button
            sx={{
              backgroundColor: "red",
              color: "white",
              marginLeft: "30px",
              letterSpacing: "0",
              textTransform: "none",
            }}
          >
            <IconsComponent icon="add" />
            Add to cart
          </Button>
        </Grid>
      </Stack>
    </Box>
  );
};

export default ProductBasicInformation;

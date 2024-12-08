import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Divider, { dividerClasses } from "@mui/material/Divider";
import AddToCart from "../../product/AddToCartForm";
import IconsComponent from "../../ui/IconsComponent";
import Badge from "@mui/material/Badge";
import { useCartContext } from "../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0",
    minWidth: "15px",
    fontSize: "0.65rem",
    height: "15px",
    transition: "transform 0.3s ease-in-out",
  },
  "& .MuiBadge-badge.animate": {
    transform: "scale(1.5)",
  },
}));

const HeaderActions = ({ user }) => {
  const { cartData, animate } = useCartContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 1,
        [`& .${dividerClasses.root}`]: {
          mx: 2,
        },
      }}
    >
      <Box sx={{ mr: 4 }}>
        <AddToCart />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <StyledBadge
          badgeContent={user.favorite_articles.length}
          color="primary"
          sx={{
            mr: 1,
          }}
        >
          <IconsComponent icon="favorite" size="18px" />
        </StyledBadge>
        <IconsComponent icon="facts-soft" />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box>
        <StyledBadge
          badgeContent={cartData.items}
          color="primary"
          classes={{
            badge: animate ? "MuiBadge-badge animate" : "MuiBadge-badge",
          }}
        >
          <IconsComponent icon="cart" size="18px" />
        </StyledBadge>
      </Box>
    </Box>
  );
};

export default HeaderActions;

import React from "react";
import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import AddToCart from "../../product/AddToCartForm";
import IconsComponent from "../../ui/IconsComponent";
import { useCartContext } from "../../context/CartContext";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledBadge = styled(Badge)({
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
});

const HeaderIcons = ({
  animate,
  isMobile,
  numberOfFavoriteArticles,
  numberOfCartItems,
}) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: isMobile ? "space-around" : "space-between",
      alignItems: "center",
    }}
  >
    <StyledBadge
      badgeContent={numberOfFavoriteArticles}
      color="primary"
      sx={{ mr: isMobile ? 0 : 1 }}
    >
      <IconsComponent icon="favorite" size="18px" />
    </StyledBadge>
    <IconsComponent icon="facts-soft" />
    {!isMobile && <Divider orientation={"vertical"} flexItem sx={{ mx: 1 }} />}
    <StyledBadge
      badgeContent={numberOfCartItems}
      color="primary"
      classes={{
        badge: animate ? "MuiBadge-badge animate" : "MuiBadge-badge",
      }}
    >
      <IconsComponent icon="cart" size="18px" />
    </StyledBadge>
  </Box>
);

const HeaderActions = ({ user }) => {
  const { cartData, animate, headerAddToCartVisible } = useCartContext();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "stretch" : "center",
        gap: isMobile ? 2 : 0,
      }}
    >
      {headerAddToCartVisible && (
        <Box
          sx={{
            width: isMobile ? "100%" : "auto",
            display: "flex",
            justifyContent: isMobile ? "center" : "flex-start",
            mr: isMobile ? 0 : 4,
          }}
        >
          <AddToCart />
        </Box>
      )}

      <HeaderIcons
        animate={animate}
        isMobile={isMobile}
        numberOfCartItems={cartData?.items}
        numberOfFavoriteArticles={user?.favorite_articles?.length}
      />
    </Box>
  );
};

export default HeaderActions;

import * as React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import IconsComponent from "../ui/IconsComponent";
import Badge from "@mui/material/Badge";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import Divider, { dividerClasses } from "@mui/material/Divider";
import AddToCart from "../product/AddToCartForm";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0",
    minWidth: "15px",
    fontSize: "0.65rem",
    height: "15px",
  },
}));

const Header = ({ productTitle, cartData, userData }) => {
  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          sx={{
            backgroundColor: "white",
            borderBottom: "0.5px solid",
            borderColor: "divider",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            variant="dense"
          >
            <Typography variant="h6" component="div" color="primary">
              {productTitle}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 1,
                "& svg": {
                  m: 1,
                },
                [`& .${dividerClasses.root}`]: {
                  mx: 2,
                },
              }}
            >
              <AddToCart />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <StyledBadge
                  badgeContent={userData.favorite_articles.length}
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
                <StyledBadge badgeContent={cartData.items} color="primary">
                  <IconsComponent icon="cart" size="18px" />
                </StyledBadge>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;

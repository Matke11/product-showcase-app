import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  CssBaseline,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeaderActions from "./HeaderActions";

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = ({ userData = {}, productTitle = "Product" }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {productTitle}
      </Typography>
      <HeaderActions user={userData} />
    </Box>
  );

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
              alignItems: "center",
            }}
            variant="dense"
          >
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon sx={{ color: "text.secondary" }} />
              </IconButton>
            ) : (
              <Typography
                variant="h6"
                component="div"
                color="primary"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  mr: "20px",
                }}
              >
                {productTitle}
              </Typography>
            )}

            {!isMobile && <HeaderActions user={userData} />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;

import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CssBaseline from "@mui/material/CssBaseline";
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

const Header = ({ userData, productTitle }) => {
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

            <HeaderActions user={userData} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;

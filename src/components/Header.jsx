import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import IconsComponent from "./ui/IconsComponent";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: "1px solid #dcdcdc",
        zIndex: 1201,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: "black" }}>
          Lorem Ipsum Dolor Sit Amet 4552
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconsComponent icon="favorite" />
          <IconsComponent icon="facts-soft" />
          <Box
            sx={{
              borderLeft: "1px solid #dcdcdc",
              paddingLeft: "10px",
              marginLeft: "10px",
            }}
          >
            <IconsComponent icon="cart" />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

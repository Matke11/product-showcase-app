import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";

const DottedList = ({ list, title }) => {
  return (
    <Box sx={{ my: 2 }}>
      {title && (
        <Typography
          sx={{ color: "text.secondary", fontWeight: 500, fontSize: "1rem" }}
        >
          {title}
        </Typography>
      )}
      {list ? (
        <List sx={{ paddingLeft: 1, paddingTop: 0 }}>
          {Object.entries(list).map(([key, value]) => (
            <Box
              key={key}
              component="li"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 0,
                listStyle: "none",
              }}
            >
              <Box
                sx={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                }}
              />
              <Typography
                component="span"
                sx={{ color: "text.secondary", fontWeight: 500 }}
              >
                {key}:
              </Typography>
              <Typography component="span" sx={{ color: "text.primary" }}>
                {value}
              </Typography>
            </Box>
          ))}
        </List>
      ) : title ? (
        `No ${title} available`
      ) : (
        ""
      )}
    </Box>
  );
};

export default DottedList;

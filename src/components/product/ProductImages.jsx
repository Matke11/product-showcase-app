import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ProductImages = ({ images }) => {
  console.log(images);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 0.5,
      }}
    >
      <Grid
        container
        direction="column"
        spacing={0.5}
        sx={{
          maxWidth: "100px",
        }}
      >
        {images.map((image, index) => (
          <Grid key={index}>
            <img
              src={image}
              alt={image}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                cursor: "pointer",
                border: selectedImage === image ? "2px solid #007BFF" : "none",
                borderRadius: "8px",
              }}
              onClick={() => handleSelectImage(image)}
            />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          flex: 1,
          maxWidth: "100%",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <img
          src={selectedImage}
          alt={selectedImage}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
};

export default ProductImages;

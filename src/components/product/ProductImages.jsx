import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import IconsComponent from "../ui/IconsComponent";

const ProductImages = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images ? images[0] : null);
  const [imageError, setImageError] = useState(false);

  const handleSelectImage = (image) => {
    setImageError(false);
    setSelectedImage(image);
  };

  const renderImage = (imageSrc, index) => {
    return imageError ? (
      <Box
        sx={{
          border: "1px solid #ddd",
          width: "80px",
          height: "80px",
          objectFit: "cover",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <IconsComponent icon="package" size="36px" color="divider" />
      </Box>
    ) : (
      <img
        src={imageSrc}
        onClick={() => handleSelectImage(imageSrc)}
        alt={`Product image ${index + 1}`}
        style={{
          width: "80px",
          height: "80px",
          objectFit: "cover",
          cursor: "pointer",
          border:
            selectedImage === imageSrc ? "2px solid #007BFF" : "1px solid gray",
          borderRadius: 0,
        }}
        onError={() => setImageError(true)}
      />
    );
  };

  const filteredImages = images?.filter((image) => image !== selectedImage);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <Grid
        container
        direction="column"
        spacing={1}
        sx={{
          maxWidth: "100px",
          minHeight: "350px",
        }}
      >
        {filteredImages?.map((image, index) => (
          <Grid key={index}>{renderImage(image, index)}</Grid>
        ))}
      </Grid>

      <Box
        sx={{
          flex: 1,
          maxWidth: "100%",
          border: "1px solid #ddd",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
        }}
      >
        {imageError || !filteredImages || filteredImages?.length === 0 ? (
          <IconsComponent icon="package" size="10rem" color="divider" />
        ) : (
          <img
            src={selectedImage}
            alt={selectedImage}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        )}
        <Box sx={{ position: "absolute", bottom: "0px", right: "10px" }}>
          <IconsComponent icon="zoom-in" size="1rem" color="gray" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductImages;

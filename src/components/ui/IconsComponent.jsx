import React from "react";

const IconsComponent = ({ icon, size = "24px", alt = "icon" }) => {
  const renderIcon = () => {
    let iconPath;
    switch (icon) {
      case "add":
        iconPath = "/icons/add.svg"; // Correct path from the public folder
        break;
      case "cart":
        iconPath = "/icons/cart.svg";
        break;
      case "discount":
        iconPath = "/icons/discount.svg";
        break;
      case "attachment":
        iconPath = "/icons/attachment.svg";
        break;
      case "facts-soft":
        iconPath = "/icons/facts-soft.svg";
        break;
      case "favorite-filled":
        iconPath = "/icons/favorite-filled.svg";
        break;
      case "favorite-filled":
        iconPath = "/icons/favorite-filled.svg";
        break;
      case "favorite":
        iconPath = "/icons/favorite.svg";
        break;
      case "package":
        iconPath = "/icons/package.svg";
        break;
      case "star-filled":
        iconPath = "/icons/star-filled.svg";
        break;
      case "star":
        iconPath = "/icons/star.svg";
        break;
      case "zoom-in":
        iconPath = "/icons/zoom-in.svg";
        break;
      case "zoom-out":
        iconPath = "/icons/zoom-out.svg";
        break;
      default:
        iconPath = "";
    }
    return iconPath;
  };

  return (
    <span style={{ lineHeight: "0" }}>
      <img src={renderIcon()} alt={alt} style={{ width: size, height: size }} />
    </span>
  );
};

export default IconsComponent;

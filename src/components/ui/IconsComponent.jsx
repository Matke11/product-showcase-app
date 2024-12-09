import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import AddSVG from "../../../public/icons/add.svg";
import CartSVG from "../../../public/icons/cart.svg";
import DiscountSVG from "../../../public/icons/discount.svg";
import AttachmentSVG from "../../../public/icons/attachment.svg";
import FactsSoftSVG from "../../../public/icons/facts-soft.svg";
import FavoriteFilledSVG from "../../../public/icons/favorite-filled.svg";
import FavoriteSVG from "../../../public/icons/favorite.svg";
import PackageSVG from "../../../public/icons/package.svg";
import StarFilledSVG from "../../../public/icons/star-filled.svg";
import StarSVG from "../../../public/icons/star.svg";
import ZoomInSVG from "../../../public/icons/zoom-in.svg";
import ZoomOutSVG from "../../../public/icons/zoom-out.svg";

const IconsComponent = ({ icon, size = "24px", color = "gray" }) => {
  const renderIcon = () => {
    let iconPath;
    switch (icon) {
    case "add":
      iconPath = AddSVG;
      break;
    case "cart":
      iconPath = CartSVG;
      break;
    case "discount":
      iconPath = DiscountSVG;
      break;
    case "attachment":
      iconPath = AttachmentSVG;
      break;
    case "facts-soft":
      iconPath = FactsSoftSVG;
      break;
    case "favorite-filled":
      iconPath = FavoriteFilledSVG;
      break;
    case "favorite":
      iconPath = FavoriteSVG;
      break;
    case "package":
      iconPath = PackageSVG;
      break;
    case "star-filled":
      iconPath = StarFilledSVG;
      break;
    case "star":
      iconPath = StarSVG;
      break;
    case "zoom-in":
      iconPath = ZoomInSVG;
      break;
    case "zoom-out":
      iconPath = ZoomOutSVG;
      break;
    default:
      iconPath = "";
    }
    return iconPath;
  };

  return (
    <SvgIcon
      component={renderIcon()}
      sx={{
        fontSize: size,
        color: color,
        width: size,
        height: size,
      }}
      inheritViewBox
    />
  );
};

export default IconsComponent;

import { IMG_CDN_URL } from "../constants";
import "../CSS/body-component.css";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <div className="reastaurant-card">
        <img
          className="reastaurant-img"
          alt="restaurant logo"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <div className="reastaurant-details">{name}</div>
        <div className="reastaurant-details">{cuisines.join(",")}</div>
        <div className="reastaurant-details">{avgRating}</div>
      </div>
    </>
  );
};

export default RestaurantCard;

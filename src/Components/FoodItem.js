import { IMG_CDN_URL } from "../constants";
import "../CSS/body-component.css";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <>
      <div className="cart-card">
        <img
          className="reastaurant-img"
          alt="restaurant logo"
          src={IMG_CDN_URL + imageId}
        />
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price / 100}</h4>
      </div>
    </>
  );
};

export default FoodItem;

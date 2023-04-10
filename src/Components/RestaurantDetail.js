import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import "../CSS/restaurant-detail.css";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetail = () => {
  const { resID } = useParams();

  const restaurantMenu = useRestaurantDetail(resID);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <div>
          <h1>{restaurantMenu[0]?.card?.card?.info?.name}</h1>
          <img
            alt="restaurant img"
            src={
              IMG_CDN_URL +
              restaurantMenu[0]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <h3>{restaurantMenu[0]?.card?.card?.info?.area}</h3>
          <h3>{restaurantMenu[0]?.card?.card?.info?.city}</h3>
          <h3>{restaurantMenu[0]?.card?.card?.info?.avgRating}</h3>
          <h3>{restaurantMenu[0]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          {(restaurantMenu[2]?.groupedCard.cardGroupMap.REGULAR.cards)
            .slice(1)
            .map((e, index) => (
              <>
                <ul key={index}>
                  {e.card.card.title}
                  {e?.card?.card?.itemCards &&
                    e?.card?.card?.itemCards.length > 0 && (
                      <ul key={index}>
                        {e?.card?.card?.itemCards.map((e) => (
                          <li className="listStyle" key={e.card.info.id}>
                            {e.card.info.name} -{console.log(e.card.info)}
                            <button onClick={() => addFoodItem(e.card.info)}>
                              Add To Cart
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </ul>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;

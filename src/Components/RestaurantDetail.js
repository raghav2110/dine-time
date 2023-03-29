import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants";
import "../CSS/restaurant-detail.css";

const RestaurantDetail = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resID } = useParams();

  useEffect(() => {
    getRestaurantDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5986763&lng=73.79783479999999&restaurantId=" +
        resID
    );
    const json = await data.json();
    setRestaurantMenu(json.data.cards);
  }

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
                            {e.card.info.name}
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/body-component.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  async function getDataFromApi() {
    let reastaurantData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5986763&lng=73.79783479999999&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await reastaurantData.json();
    setFilteredRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(data?.data?.cards[2]?.data?.data?.cards);
    return reastaurantData;
  }
  if (!restaurantList) {
    return null;
  }

  return restaurantList?.length > 0 ? (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          onClick={() => {
            setFilteredRestaurantList(filterData(searchTxt, restaurantList));
          }}
        >
          Search
        </button>
      </div>
      <div>
        {filteredRestaurantList?.length > 0 ? (
          <div className="main-body">
            {filteredRestaurantList?.map((element) => (
              <Link to={"/restaurant/" + element["data"]["id"]}>
                <RestaurantCard
                  {...element["data"]}
                  key={element["data"]["id"]}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div>No restaurant found ....</div>
        )}
      </div>
    </>
  ) : (
    <Shimmer />
  );
};

export default BodyComponent;

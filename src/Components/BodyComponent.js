import React, { useState } from "react";
import "../CSS/body-component.css";
import RestaurantCard from "./RestaurantCard";
import { restaurant } from "../constants";

const filterData = (searchTxt, restaurant) => {
  console.log(searchTxt, restaurant);
  const data = restaurant.filter((r) => r["data"]["name"].includes(searchTxt));
  return data;
};

const BodyComponent = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurantList, setRestaurantList] = useState(restaurant);

  return (
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
            setRestaurantList(filterData(searchTxt, restaurant));
          }}
        >
          Search
        </button>
      </div>
      <div className="main-body">
        {restaurantList.map((element) => (
          <RestaurantCard {...element["data"]} key={element["data"]["id"]} />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;

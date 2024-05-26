import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurantList } from "../config";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.event);
          }}
        ></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list bodycard">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;

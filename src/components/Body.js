import RestrauntCard from "./RestrauntCard";
import MockData from "../utils/MockData";

import { useEffect, useState } from "react";

const Body = () => {
  const [list_of_restraunt, set_list_of_restraunt] = useState(MockData);

  useEffect(() => {
    fxn();
  }, []);

  const fxn = async () => {
    const fetch_data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.769223219109158&lng=76.57429534004214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const fetched = await fetch_data.json(fetch_data);
    set_list_of_restraunt(
      fetched?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <div className="bodyContainer">
      <button
        className="filter-btn"
        onClick={() => {
          const filtered_list_of_restraunt = list_of_restraunt.filter((ele) => {
            return ele.info.avgRating >= 4.5;
          });
          set_list_of_restraunt(filtered_list_of_restraunt);
        }}
      >
        Top rated Restraunts
      </button>

      <div className="resContainer">
        {list_of_restraunt.map((ele) => {
          return <RestrauntCard key={ele.info.id} resData={ele} />;
        })}
      </div>
    </div>
  );
};

export default Body;

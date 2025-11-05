import RestrauntCard from "./RestrauntCard";
import MockData from "../utils/MockData"; //Now using shimmer ui
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Body = () => {
  const [list_of_restraunt, set_list_of_restraunt] = useState([]); //Emty array to prevent error->Can't acces property of Undefined->Master List

  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);

  /* console.log(filterList); */ //The entire component is getting re-render and console.log() is in component

  useEffect(() => {
    fxn();
  }, []);

  const fxn = async () => {
    const fetch_data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const fetched = await fetch_data.json();

    //Set both master and slave list
    const items =
      fetched?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    set_list_of_restraunt(items);
    setFilterList(items);
  };

  if (filterList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="bodyContainer">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(
              e.target.value
            ); /* Om every key press entire component is getting re-rendering */
          }}
        />
        <button
          onClick={() => {
            //Filter the restraunt card and updates Ui->Bind the value 0f state variable with input box
            const filter_res = list_of_restraunt.filter((ele) => {
              return ele.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()); //Print the data for path
            });

            setFilterList(filter_res);
          }}
        >
          Search
        </button>
      </div>

      <button
        className="filter-btn"
        onClick={() => {
          const filtered_list_of_restraunt = list_of_restraunt.filter((ele) => {
            return ele.info.avgRating >= 4.5;
          });
          setFilterList(filtered_list_of_restraunt);
        }}
      >
        Top rated Restraunts
      </button>

      <div className="resContainer">
        {filterList.map((ele) => {
          return (
            <Link key={ele?.info?.id} to={"/restraunt/" + ele?.info?.id}>
              <RestrauntCard resData={ele} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

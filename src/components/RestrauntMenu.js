import { useEffect, useState } from "react";

import { SWIGGY_RESTRAUNT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import { useParams } from "react-router";

const RestrauntMenu = () => {
  const [resInfo, set_resInfo] = useState(null);

  const { resId } =
    useParams(); /* {Object Destructring } Now this is getting from routing in react */

  useEffect(() => {
    fxn();
  }, []);

  const fxn = async () => {
    const fetched = await fetch(SWIGGY_RESTRAUNT_MENU_URL + resId);
    const fetch_data = await fetched.json();

    /* Printing the Data for checkup
    console.log(fetch_data); */

    set_resInfo(fetch_data);
  };

  /* ---------------------------------------------------------- */

  if (resInfo === null) {
    return <Shimmer />;
  }

  // Now we know resInfo is an array.
  // Let's get the *first* restaurant from the list.

  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h2>{cuisines.join(",")}</h2>
    </div>
  );
};

export default RestrauntMenu;

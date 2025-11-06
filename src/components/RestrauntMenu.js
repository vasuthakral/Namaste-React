import useRestrauntMenu from "../utils/useRestrauntMenu"; /* Custom hook */
import Shimmer from "./Shimmer";

import { useParams } from "react-router";

const RestrauntMenu = () => {
  const { resId } =
    useParams(); /* {Object Destructring } Now this is getting from routing in react */

  const resInfo =
    useRestrauntMenu(
      resId
    ); /* Custom hook ->for fetching the data ->Single Modularity prncipal (resInfo is state variable as of return ) */


  /* Conditional Rendering */
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

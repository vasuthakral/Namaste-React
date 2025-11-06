import { useState, useEffect } from "react";
import { SWIGGY_RESTRAUNT_MENU_URL } from "./constants";

/* This is not React Component not Object destructring */
const useRestrauntMenu = (resId) => {
  const [resInfo, set_resInfo] = useState(null);

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

  return resInfo; /* return the state variable */
};

export default useRestrauntMenu;

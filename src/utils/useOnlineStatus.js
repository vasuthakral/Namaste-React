/* Input->I dont need anything(No information from component)  
   output->state variable (changable)*/

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, set_onlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      set_onlineStatus(true);
    });

    window.addEventListener("offline", () => {
      set_onlineStatus(false);
    });
  }, []);

  return onlineStatus; /* Boolean variable */
};

export default useOnlineStatus;

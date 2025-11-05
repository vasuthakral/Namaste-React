import { SWIGGY_IMAGE_URL } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="resCard">
      <h4>{name}</h4>
      <div className="logoContainer">
        <img className="bodyLogo" src={SWIGGY_IMAGE_URL + cloudinaryImageId} />
      </div>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestrauntCard;

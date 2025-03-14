import { useState, useEffect } from "react";
import { HraAssets } from "../../assets/Hra/assets";

const StarRating = ({ numberofstars, message = true, onStarChange, initialValue = 0 }) => {
  const [star, setStar] = useState(initialValue); // Set initial value of star

  const messages = ["Bad", "Average", "Good", "Very Good", "Excellent"];

  const handleClick = (index) => {
    const selectedStars = index + 1;
    setStar(selectedStars);
    if (onStarChange) {
      onStarChange(selectedStars);
    }
  };

  useEffect(() => {
    setStar(initialValue); // Update star if the initial value changes
  }, [initialValue]);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="flex">
          {[...Array(numberofstars)].map((_, index) => (
            <img
              key={index}
              src={index < star ? HraAssets.GoldColorStar : HraAssets.LightColorStar}
              alt="star"
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        {message && star > 0 && (
          <span className="text-md text-[#12B76A] font-bold">
            {messages[star - 1]}
          </span>
        )}
      </div>
    </div>
  );
};

export default StarRating;

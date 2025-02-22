import { useState } from "react";
import { useSingleEffect } from "react-haiku";
import { getStarsCount } from "../utils/utils";

export const useStars = () => {
  const [stars, setStars] = useState(0);

  useSingleEffect(() => {
    const fetchStars = async () => {
      const count = await getStarsCount();
      setStars(count);
    };

    fetchStars();
  }, []);

  return stars;
};
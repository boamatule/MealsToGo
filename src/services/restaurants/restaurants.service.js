// import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `http://localhost:5001/mealstogo-c6d2e/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  // const newResult = camelize(results.length);
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "Closed_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

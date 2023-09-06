// eslint-disable-next-line no-unused-vars
import React from "react";
import * as images from '../imagePaths'; // Import named exports as an object

function LocationNotFound() {
  return (
    <div className="location-not-found">
      <h1>Sorry, Location not found!!!</h1>
      <img src={images.notFoundImage} alt="404 Error" />
    </div>
  );
}

export default LocationNotFound;

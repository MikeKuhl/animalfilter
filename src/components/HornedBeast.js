import React from "react";
import jsonGallery from "../data/data.json";

function HornedGallery() {
  return (
    <div>
      {jsonGallery.map((image, i) => (
        <div className='beasts' key={i}>
          <img src={`${image.image_url}`} alt={image.description} key={i} />
        </div>
      ))}
    </div>
  );
}

export default HornedGallery;

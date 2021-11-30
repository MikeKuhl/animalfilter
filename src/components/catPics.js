import React from "react";

function CatPics(props) {
  const { name, description } = props;
  return (
    <div>
      <img
        src={`https://i.imgur.com/jCVi6cC.jpeg`}
        width='300'
        height='300'
        alt='Cat'
        title='Cat'
        description='Totally a cat!'
      />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default CatPics;

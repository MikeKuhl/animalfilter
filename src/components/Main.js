import React from "react";
import CatPics from "./catPics";
function Main() {
  return (
    <div>
      <CatPics name='cat name' description='cat description' />
      <CatPics />
      <CatPics />
      <CatPics />
    </div>
  );
}
export default Main;

import React, { memo } from "react";

const Child = (props) => {
  function changeNumber() {
    // props.changeNumber(Math.random());
    props.changeNumber((state) => state + 1);
  }
  console.log("here");
  return (
    <div>
      <h1>Child: {props.number}</h1>
      {/* onClick={changeNumber} */}
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  );
};
export default memo(Child);

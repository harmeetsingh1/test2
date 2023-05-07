import React from "react";

function HeadingButton({ handleHeadingButtonClick, paragraphRef2 }) {
  return (
    <>
      <button onClick={handleHeadingButtonClick} className="butc">
        H2
      </button>
    </>
  );
}

export default HeadingButton;

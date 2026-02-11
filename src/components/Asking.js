import React, { useState } from "react";

/**
 * Asking component for proposing the Valentine's Day question.
 */
const Asking = ({
  gif,
  altText,
  handleAccept,
  handleReject,
  noButtonText,
}) => {
  const [yesSize, setYesSize] = useState(1);

  const handleNoClick = () => {
    setYesSize((prev) => prev + 0.2); // grow Yes button
    handleReject(); // keep original functionality
  };

  return (
    <>
      <img className="App-gif" src={gif} alt={altText} />

      <p className="App-text">
        Divya, will you be my Valentine?
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          alignItems: "center",
        }}
      >
        {/* Yes Button (grows properly, no overlap) */}
        <button
          className="App-button"
          onClick={handleAccept}
          style={{
            fontSize: `${2 * yesSize}rem`,
            padding: `${0.5 * yesSize}rem ${1.5 * yesSize}rem`,
            transition: "all 0.3s ease",
          }}
        >
          Yes
        </button>

        {/* No Button */}
        <button
        style={{    padding: '0.5rem 1.5rem'}}
          className="App-button"
          onClick={handleNoClick}
        >
          {noButtonText}
        </button>
      </div>
    </>
  );
};

export default Asking;


import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";

// GIF imports
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";
import sadBear from "./crying.gif";
import angryBear from "./angryBear.gif";
import cryBear from "./PleaseBear.gif";

/**
 * Main App component managing the Valentine's Day proposal.
 */
const App = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [rejectionIndex, setRejectionIndex] = useState(null);

  // Rejection texts + GIF mapping
  const rejectionOptions = [
    {
      text: "Are you sure?",
      gif: madBear,
    },
    {
      text: "Maybe try again?",
      gif: sadBear,
    },
    {
      text: "Think again!",
      gif: angryBear,
    },
    {
      text: "Please :(",
      gif: cryBear,
    },
  ];

  // YES handler
  const handleAccept = () => {
    setAccepted(true);
  };

  // NO handler
const handleReject = () => {
  setRejected(true);

  setRejectionIndex((prevIndex) => {
    if (prevIndex === null) return 0; // first click
    return (prevIndex + 1) % rejectionOptions.length; // loop through
  });
};

  return (
    <div className="App">
      <div className="App-body">
        {!accepted && (
          <Asking
            gif={
              rejected && rejectionIndex !== null
                ? rejectionOptions[rejectionIndex].gif
                : flowerBear
            }
            altText="Bear reaction"
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={
              rejected && rejectionIndex !== null
                ? rejectionOptions[rejectionIndex].text
                : "No"
            }
          />
        )}

        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;

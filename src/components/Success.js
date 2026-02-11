import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      You're my all time favorite person, and the one I enjoy every
      moment with.
    </p>
    <p className="App-text-success">
      Looking forward to spending Valentine's Day with you, Divya.
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">14/02/2026</p>
  </div>
);

export default Success;

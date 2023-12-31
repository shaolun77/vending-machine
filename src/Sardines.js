import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
// import "./Sardines.css";

function Sardines() {
  return (
    <div
      className="Sardines"
      style={{
        backgroundImage:
          "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
      }}>
      <Message>
        <h1>Delicious Sardines</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Sardines;

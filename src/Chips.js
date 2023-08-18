import React, { useState } from "react";
import chipsImg from "./Chips.png";
import { Link } from "react-router-dom";
import Message from "./Message";
// import "./Chips.css";

function Chips() {
  return (
    <div className="Chips">
      <img src={chipsImg} alt="bag of chips" />
      <Message>
        <h1>Delicious Chips</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Chips;

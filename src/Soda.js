import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.png";
// import "./Soda.css";

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaImg} alt="coca cola can" />
      <Message>
        <h1>Enjoy a Coke</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
      <img src={sodaImg} alt="coca cola can" /> */
    </div>
  );
}

export default Soda;

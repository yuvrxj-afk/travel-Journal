import React from "react";
import world from "../images/world.png";

export default function Navbar() {
  return (
    <div className="navbar--container">
      <div className="mid-container">
        <img src={world} alt="" className="world" />
        <h4 className="nav--p">My Travel Journal</h4>
      </div>
    </div>
  );
}

import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar--container">
      <div className="mid-container">
        <img src={props.img} alt="" className="world" />
        <h4 className="nav--p">My Travel Journal</h4>
      </div>
    </div>
  );
}

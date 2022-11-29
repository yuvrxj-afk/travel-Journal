import React from "react";

export default function Place(props) {
  return (
    <div className="Place--container">
      <div className="left--container">
        <img
          src="https://images.unsplash.com/photo-1624291067255-5602fd940d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          alt="error"
          className="left-image"
        />
      </div>
      <div className="right--container">
        <div className="first--location">
          <div className="location">
            <img src={props.point} className="location--image" alt="" />
            <span className="city--name">JAPAN</span>
            <a className="map--link" href="/">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="heading--part">
          <h1 className="mane--h1">Mount Fuji</h1>
        </div>
        <div className="content--part">
          <h4>21 Jan,2021 - 24 Jan,2021</h4>
          <p>
            Mount Fuji is the tallest mountain in Japan,standing at 3,776 meters
            (12,380 feet).Mount Fuji is the single most popular tourist site in
            Japan, for both Japanese and foriegn tourists.
          </p>
        </div>
      </div>
    </div>
  );
}

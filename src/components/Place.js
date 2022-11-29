import React from "react";

export default function Place(props) {
  return (
    <div className="Place--container">
      <div className="left--container">
        <img
          src={props.details.imageUrl}
          alt="error"
          className="left-image"
        />
      </div>
      <div className="right--container">
        <div className="first--location">
          <div className="location">
            <img src={props.point} className="location--image" alt="" />
            <span className="city--name">{props.details.location}</span>
            <a className="map--link" href={props.details.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="heading--part">
          <h1 className="mane--h1">{props.details.title}</h1>
        </div>
        <div className="content--part">
          <h4>{props.details.startDate} - {props.details.endDate}</h4>
          <p>
           {props.details.description}
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const UserCard = ({ el }) => {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="java">{el.name}</h2>
          <p className="java">
            <h4>Email:{el.email}</h4>
            <h4>Address:{el.address && el.address.street} </h4>
            <h4>City:{el.address && el.address.city} </h4>
            <h4>Phone:{el.phone}</h4>
            <h4>Website:{el.website}</h4>
          </p>
        </div>
      </div>
      <div className="face face2">
        <h2>{el.name}</h2>
      </div>
    </div>
  );
};

export default UserCard;

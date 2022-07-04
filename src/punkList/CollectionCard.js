import "./collection-card.css";
import React from "react";

const CollectionCard = ({ image, name, id, trait, price }) => {
  return (
    <div className="collection-card">
      <img src={image} alt="" />
      <div className="collection-card-details">
        <div className="name">
          <p>{name}</p>
          <p className="id">{id}</p>
        </div>

        <div className="price-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png"
            alt=""
          />
          <p className="price"> {price}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;

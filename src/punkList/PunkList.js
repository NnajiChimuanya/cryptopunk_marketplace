import "./punkList.css";
import React from "react";
import im from "../1.jpg";
import CollectionCard from "./CollectionCard";

const PunkList = () => {
  return (
    <div className="punk-list">
      <CollectionCard
        image={im}
        price="5"
        id="4"
        trait="55"
        name="Blue hat punk"
      />
    </div>
  );
};

export default PunkList;

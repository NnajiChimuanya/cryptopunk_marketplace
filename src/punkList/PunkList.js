import "./punkList.css";
import React from "react";
import im from "../1.jpg";
import CollectionCard from "./CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

const PunkList = () => {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      let data = await axios.get(
        "https://cryptopunk-marketplace-backend.herokuapp.com/getNfts"
      );
      setPunkListData(data.data);
    };

    getNfts();
  }, []);

  return (
    <div className="punk-list">
      {punkListData.map((punk) => {
        const { token_id, image_original_url, name, traits } = punk;
        return (
          <div>
            <CollectionCard
              key={token_id}
              image={image_original_url}
              price={traits[0].value}
              id={token_id}
              trait="55"
              name={name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;

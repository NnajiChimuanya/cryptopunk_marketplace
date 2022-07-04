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
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xE3320a32f3c5959845C6A39b3B0d29D869A8F968&order_direction=asc"
      );
      setPunkListData(data.data.assets);
    };

    getNfts();
  }, []);

  return (
    <div className="punk-list">
      {punkListData.map((punk) => {
        const { token_id, image_original_url, name, trait } = punk;
        return (
          <CollectionCard
            image={image_original_url}
            price="5"
            id={token_id}
            trait="55"
            name={name}
          />
        );
      })}
    </div>
  );
};

export default PunkList;

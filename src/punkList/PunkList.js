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
      console.log(data.data.assets);
    };

    getNfts();
  }, []);

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

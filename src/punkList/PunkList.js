import "./punkList.css";
import React from "react";
import im from "../1.jpg";
import CollectionCard from "./CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

const PunkList = () => {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [activePunk, setActivePunk] = useState(0);

  useEffect(() => {
    const getNfts = async () => {
      let data = await axios.get(
        "https://cryptopunk-marketplace-backend.herokuapp.com/getNfts"
      );
      setPunkListData(data.data.reverse());
      console.log(data.data);
    };

    getNfts();
  }, []);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);

  const handleClick = (x) => {
    setSelectedPunk(x);
  };

  console.log(activePunk);

  return (
    <div>
      {punkListData.length > 0 && (
        <div className="main">
          <div className="punk-highlight">
            <img src={activePunk?.image_original_url} alt="" />
          </div>
          <div className="details">
            <div className="details-punk"></div>
            <div className=""></div>
          </div>
        </div>
      )}

      <div unselectable="on" className="punk-list">
        {punkListData.map((punk, id) => {
          const { token_id, image_original_url, name, traits } = punk;
          return (
            <div key={id} onClick={() => handleClick(token_id)}>
              <CollectionCard
                onClick={() => handleClick(id)}
                key={id}
                image={image_original_url}
                price={traits[0].value}
                id={token_id}
                name={name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PunkList;

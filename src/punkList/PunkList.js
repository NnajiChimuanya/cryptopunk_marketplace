import "./punkList.css";
import React from "react";
import im from "../1.jpg";
import CollectionCard from "./CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { ExternalLink } from "react-external-link";

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

  return (
    <div>
      {punkListData.length > 0 && (
        <div className="main">
          <div className="punk-highlight">
            <img src={activePunk?.image_original_url} alt="" />
          </div>
          <div className="details">
            <div className="details-punk">
              <h2 className="description"> {activePunk?.name}</h2>
              <span className="id"> -#{activePunk?.id}</span>
            </div>
            <div className="details-user">
              <div className="owner">
                <div>
                  <img
                    className="owner-image"
                    src={activePunk?.owner.profile_img_url}
                    alt=""
                  />
                </div>
                <div className="owner-details">
                  <p className="address">
                    <ExternalLink href="https://testnets.opensea.io/nnaji_chimuanya">
                      {activePunk?.owner.address}
                    </ExternalLink>
                  </p>
                  <p className="address">
                    <ExternalLink href="https://testnets.opensea.io/nnaji_chimuanya">
                      {activePunk?.owner.user.username}
                    </ExternalLink>
                  </p>
                </div>
              </div>

              <div className="social-media">
                <div className="icon">
                  <ExternalLink href="https://www.instagram.com/nnaji_chimuanya/">
                    <span>
                      <InstagramIcon className="main-icon" />
                    </span>
                  </ExternalLink>
                </div>

                <div className="icon">
                  <ExternalLink href="https://twitter.com/nnaji_chimuanya">
                    <span>
                      <TwitterIcon className="main-icon" />
                    </span>
                  </ExternalLink>
                </div>

                <div className="icon">
                  <ExternalLink href="https://nnajichimuanya50@gmail.com">
                    <span>
                      <EmailIcon className="main-icon" />
                    </span>
                  </ExternalLink>
                </div>
              </div>
            </div>
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

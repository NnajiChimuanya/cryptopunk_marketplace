import React from "react";
import "./header.css";
import logo from "../cryptopunk-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="" className="header-logo-image" />
      </div>

      <div className="header-searchbar">
        <SearchIcon />

        <div className="header-searchbar-input">
          <input type="text" placeholder="Search collection, item" />
        </div>
      </div>

      <div className="header-items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="header-actions">
        <div className="light-mode">
          <LightModeIcon />
        </div>
      </div>

      <div className="login-button">Get in</div>
    </header>
  );
};

export default Header;

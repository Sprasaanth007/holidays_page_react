import React from "react";
import "./Header.css";
import settings from "./Assets/settings.png";
import chat from "./Assets/chat.png";
import question from "./Assets/question.png";
import options from "./Assets/options.png";
import avatar from "./Assets/avatar.png";
import coin from "./Assets/coin.png";

const Header = () => {
  return (
    <div className="header">
      <div className="setting">
        <img src={settings} alt="" />
        <p>Settings</p>
      </div>
      <div className="right__menu">
        <img src={chat} alt="chat" />
        <img src={question} alt="question" />
        <img src={options} alt="options" />
        <img src={coin} alt="coin" />
        <p>50,000</p>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;

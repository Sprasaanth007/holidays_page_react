import React from "react";
import "./Sidebar.css";
import icon1 from "./Assets/icon1.png";
import icon2 from "./Assets/icon2.png";
import icon3 from "./Assets/icon3.png";
import icon4 from "./Assets/icon4.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="active">
        <div></div>
        <img src={icon1} alt="icon1" />
      </div>
      <div>
        <img src={icon2} alt="icon2" />
      </div>
      <div>
        <img src={icon3} alt="icon3" />
      </div>
      <div>
        <img src={icon4} alt="icon4" />
      </div>
    </div>
  );
};

export default Sidebar;

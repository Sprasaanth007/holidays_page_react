import React from "react";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightContent from "../RightContent/RightContent";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <LeftNavigation />
      <RightContent />
    </div>
  );
};

export default Body;

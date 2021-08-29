import React, { useState } from "react";
import "./Holidays.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Holidays = () => {
  const [holidays, setHolidays] = useState([
    { name: "Warren Buffet", type: "optional", date: "12 July, 2021" },
    { name: "Elon Musk", type: "optional", date: "12 July, 2021" },
    { name: "Virat Kohli", type: "optional", date: "12 July, 2021" },
    { name: "Ravindra Jadeja", type: "optional", date: "12 July, 2021" },
    { name: "Rohit Sharma", type: "optional", date: "12 July, 2021" },
  ]);

  const removeHoliday = (name) => {
    const removedArr = [...holidays].filter((holiday) => holiday.name !== name);
    setHolidays(removedArr);
  };

  return (
    <div>
      <div className="columns">
        <div style={{ flex: "0.2" }}>Name</div>
        <div style={{ flex: "0.5" }}>Type</div>
        <div style={{ flex: "0.2" }}>Date</div>
        <div style={{ flex: "0.1" }}></div>
      </div>
      {holidays.map((holiday) => (
        <div className="holiday">
          <div className="name">{holiday.name}</div>
          <div className="type">{holiday.type}</div>
          <div className="date">{holiday.date}</div>
          <div className="icons">
            <EditOutlined style={{ marginRight: "40px" }} />
            <DeleteOutlined onClick={() => removeHoliday(holiday.name)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Holidays;

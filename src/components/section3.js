import React, { useState } from "react";
import Card from "../img/profile.jpg";

const Section3 = () => {
  const [itemList, setCount] = useState([
    { id: 1, name: "Muhammad Haider", username: "@haider", imageUrl: Card },
    { id: 1, name: "John Max", username: "@john", imageUrl: Card },
    { id: 1, name: "Muhammad Haider", username: "@haider", imageUrl: Card },
    { id: 1, name: "John Max", username: "@john", imageUrl: Card },
    { id: 1, name: "John Max", username: "@john", imageUrl: Card },
  ]);
  return (
    <div className="col1">
      <div>
        <p>
          <strong>Popular Groups</strong>
        </p>
        {itemList.map((item) => (
          <div key={item.id} style={{ paddingTop: "20px" }}>
            <div className="image-container">
              <img src={item.imageUrl} alt="Your Image" className="image" />
            </div>
            <div className="text-container">
              <p className="image-text">
                <strong>{item.name}</strong>
              </p>
              <p className="image-text">{item.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;

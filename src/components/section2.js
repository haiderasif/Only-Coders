import React, { useState } from "react";
import Card from "../img/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Example icon, replace with your desired icon
import { FaLaugh } from "react-icons/fa"; // Import the FontAwesome icons
import profile from "../img/card.png";
const Section2 = () => {
  const [itemList, setItem] = useState([
    {
      id: 1,
      name: "Muhammad Haider",
      time: "1 year ago",
      imageUrl: Card,
      replied: true,
      topic: "Welcome to the group",
      form: "New form group",
      verified: true,
      promember: true,
      message: "Hello everyone!",
      postimg: null,
    },
    {
      id: 1,
      name: "Muhammad Haider",
      time: "1 year ago",
      imageUrl: Card,
      replied: false,
      topic: "Welcome to the group",
      form: "New form group",
      verified: true,
      promember: true,
      message: "Updating my profile",
      postimg: profile,
    },
  ]);
  const [count, setCount] = useState(1);
  const handleEmojiClick = () => {
    // Increment the count state
    setCount(count + 1);
  };
  return (
    <div>
      <div className="col1">
        <div class="row">
          <div class="col-md-7">
            <div class="text-right">
              <p className="p-tag">All Updates</p>
            </div>
          </div>
          {/* Dropdown design */}
          <div class="col">
            <div class="text-end">
              <div class="col-md-3">
                <label className="label-text" for="exampleDropdown">
                  Show
                </label>
              </div>
              <div class="group">
                <button class=" btn btn-sm" type="button">
                  Everything
                </button>
                <button
                  type="button"
                  class="arrow btn dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle Dropdown</span>
                </button>
                <div class="dropdown-menu">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {itemList.map((item) => (
        <div className="col2">
          <div key={item.id}>
            <div className="image-container">
              <img src={Card} alt="Your Image" className="image" />
            </div>
            <div className="text-container-post">
              <p className="post">
                <strong>{item.name} </strong>
                {/* Check if user is verified or not */}
                {item.verified ? <FontAwesomeIcon icon={faCheck} /> : null}
                {item.promember ? (
                  <span className="pro-member"> pro member</span>
                ) : null}
                {/* Check if user has replied to a post or added a post */}
                {item.replied ? (
                  <span>
                    {" replied to the topic "}
                    <strong>{item.topic}</strong>
                    {" in the form "}
                    <strong>{item.form}</strong>
                  </span>
                ) : (
                  " posted an update"
                )}
              </p>
              <p className="post-sub-heading">{item.time}</p>
            </div>
            {/* The main message area */}
            <p
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
                fontSize: "15px",
                color: "#7c809c",
              }}
            >
              {item.message}
            </p>
            {/* Check if user has posted any picture */}
            {item.postimg ? (
              <img
                src={item.postimg}
                alt="Post Image"
                style={{ display: "block", margin: "0 auto" }}
              />
            ) : null}
          </div>
          <hr style={{ backgroundColor: "#f0f0f7" }} /> {/* Horizontal line */}
          <div class="row">
            <div class="col-md-8">
              <FaLaugh
                size={20}
                onClick={handleEmojiClick}
                style={{ cursor: "pointer" }}
              />{" "}
              <span style={{ fontSize: "12px" }}>{count}</span>
              <div class="text-right"></div>
            </div>
            <div class="col">
              <p style={{ fontWeight: 600, fontSize: "13px" }}>
                {" "}
                0 comments &nbsp; &nbsp; &nbsp;0 shares
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;

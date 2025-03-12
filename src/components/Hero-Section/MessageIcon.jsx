import React from "react";
import messageIcon from "../../assests/images/message_icon.png"; // Ensure the path is correct
import "./message-icon.css";

const MessageIcon = () => {
  return (
    <div className="message-icon">
      <img src={messageIcon} alt="Message Icon" className="message-icon-img" />
    </div>
  );
};

export default MessageIcon;

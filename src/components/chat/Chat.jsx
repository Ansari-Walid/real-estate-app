import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>
        <div className="message">
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>
        <div className="message">
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit...</p>
        </div>
      </div>
      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <span>John Doe</span>
              <div className="close" onClick={() => setChat(null)}>
                X
              </div>
            </div>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet .</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet .</p>
              <span>1 hour ago</span>
            </div>{" "}
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet .</p>
              <span>1 hour ago</span>
            </div>{" "}
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet .</p>
              <span>1 hour ago</span>
            </div>{" "}
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet .</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;

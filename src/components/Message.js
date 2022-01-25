import React from "react";
import "../index.css";

function Message() {
  return (
    <div className="textBox">
        <h3>Messages</h3>
        <br></br>
        <p>
                  Les messages du chat ici.
        </p>
                <p className="textBox">
                  Votre message ici! 
                </p>
    </div>
  );
}
export default Message;
import React from "react";
import "./ChatListItem.css";

export default () => {
  return (
    <div className="chatListItem">
      <img className="chatListItem--avatar" src="./user.png" alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Evandro Santana</div>
          <div className="chatListItem--date">10:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>
              Deixem que o futuro diga a verdade e avalie cada um de acordo com
              o seu trabalho e realizações. O presente pertence a eles, mas o
              futuro pelo qual eu sempre trabalhei pertence a mim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

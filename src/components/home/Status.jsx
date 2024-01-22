import React from "react";
import "../../styles/status.css";
import { obj as statusObj } from "../../data/statusData";
const Status = () => {
  return (
    <div>
      <div className="statusContainer">
        {statusObj.map((obj) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", gap:"10px",
            alignItems:"center"}}>
              <img style={{border:"4px solid pink",borderRadius:"50%"}}
                width="50px"
                height=""
                src={`${obj.profilePics}`}
                alt="profilepics"
              />
              <span>{obj.username}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;

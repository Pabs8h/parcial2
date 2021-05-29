import "./Card.scss";
import React, { useEffect } from "react";

const CardRoom = (props) => {

  return (
    <div className="card h-100">
      <div className="card-body" onClick={props.onClick}>
        <h5 className="card-title">{props.props.name}</h5>    
            {props.props.type === "room"?
                <img src="/living-room.png" className="card-img-bottom" alt="room" />
            :
                <img src="/kitchen.png" className="card-img-bottom" alt="room" />
            }
        </div>
    </div>
  );
};

export default CardRoom;

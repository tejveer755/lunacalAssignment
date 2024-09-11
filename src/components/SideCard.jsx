import React from "react"
import quesMark from "../assets/quesMark.png"
const SideCard= () => {
  return (
    <div className="side">
    <img src={quesMark} alt="" />
    
    <div className="boxes">
      <div className="box"><span>&nbsp;</span><span>&nbsp;</span></div>
      <div className="box"><span>&nbsp;</span><span>&nbsp;</span></div>
      <div className="box"><span>&nbsp;</span><span>&nbsp;</span></div>
    </div>
    </div>
  )
};

export default SideCard;

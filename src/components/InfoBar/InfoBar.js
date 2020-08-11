import React from 'react';
import del from '../../Icons/del.png';

import onlineIcon from '../../Icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online" />
          <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img className="closeicon" scr={del} alt="close" /></a>
        </div>
    </div>
)

export default InfoBar;
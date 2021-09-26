import React from 'react';
import './Tracker.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Tracker() {
  return (
    <div className="tracker">
      <div className="tracker__header">
        
      </div>
      <dive className="tracker__body">
        <div className="tracker__background"></div>
        <form className="search__form">
          <input className="search__input" placeholder="Location" type="text" />
          <button className="search__button" type="Submit">Submit</button>
        </form>
        
      </dive>
    </div>
  );
}

export default Tracker;
import React, { Component } from 'react';

import './css/Gallery.css';

const MusicPlayer = (props) => (
      <div className="Gallery">
          <div className="project">
            <img className="gallery-img" src={props.img}/>
        </div>
      </div>
)

export default MusicPlayer;

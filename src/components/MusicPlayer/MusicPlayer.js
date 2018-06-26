import React, { Component } from 'react';

import './css/MusicPlayer.css';

const MusicPlayer = (props) => (
  <div className="musicplayer" style={{backgroundImage: `url(${props.image})`}}>
    <div className="chin">
      <div>
        <h1>{props.name}</h1>
        <h2>{props.artist}</h2>
      </div>
    </div>
  </div>
)

export default MusicPlayer;

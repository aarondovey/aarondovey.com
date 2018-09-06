import React, { Component } from 'react';

import './css/MusicPlayer.css';

const MusicPlayer = (props) => (
      <div className="musicplayer" style={{backgroundImage: `url(${props.image})`}}>
        <div className="chin">
          <div>
            <h1>{props.name}</h1>
            <h2>{props.artist}</h2>
            <audio controls className="player">
              <source src={props.song}/>
            </audio>
          </div>
        </div>
      </div>
)

export default MusicPlayer;

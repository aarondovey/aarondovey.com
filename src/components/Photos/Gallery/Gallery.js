import React, { Component } from 'react';

import './css/Gallery.css';

const Gallery = (props) => (
    <div className="img-container"><img src={props.img} className="gallery-img" alt=""/></div>
)

export default Gallery;

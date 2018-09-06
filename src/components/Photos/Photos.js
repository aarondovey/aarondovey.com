import React, {Component} from 'react';
import Gallery from "./Gallery/Gallery";

import anime from 'animejs';
import Reveal from 'react-reveal';
import Fade from 'react-reveal/Fade';

const data = [
  {img:"img/sunset.jpg"},
  {img:"img/roof.jpg"},
  {img:"img/neon.jpg"},
  {img:"img/me.jpg"},
  {img:"img/me-red.jpg"},
]

class Photos extends Component {

  componentDidMount() {

    var lineDrawing = anime({
      duration: 2500,
      delay: function(el, i) { return i * 100 },
      opacity: ["0","1"],
      targets: "path",
      scale: ["1","1"],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutCubic",
      begin: function(anim) {
        var letters = document.querySelectorAll("path"),
          i;

        for (i = 0; i < letters.length; ++i) {
          letters[i].setAttribute("stroke", "white");
          letters[i].setAttribute("stroke-width", "2");
          letters[i].setAttribute("fill","none");
        }
      },
      },
    );
  }

  render() {
    return(
      <div>
        <div className="pg3 center photosheader">
            <h1 className="title padding">
              Phot<span className="rainbow">o</span>s
            </h1>
        </div>

        <div className="Gallery">
          {data &&
            data.map((item, key) => {
              return <Gallery key={key} img={item.img}/>
            })
          }
        </div>

      </div>

    )
  }
}

export default Photos;

import React, {Component} from 'react';
import Col1 from "./Gallery/Col1";
import Col2 from "./Gallery/2";
import Col3 from "./Gallery/Col3";

import anime from 'animejs';


const data = [
  {Col1:"img/building.jpg", Col2:"img/bush.jpg", Col3:"img/cliff.jpg"},
  {Col1:"img/cow.jpg", Col2:"img/fam.jpg", Col3:"img/lights.jpg"},
  {Col1:"img/me-red.jpg", Col2:"img/sky.jpg", Col3:"img/sunset.jpg"},
  {Col1:"img/table.jpg", Col2:"img/trees.jpg", Col3:"img/window.jpg"},
  {Col1:"img/bike.jpg", Col2:"img/help.jpg", Col3:"img/construct.jpg"},
  {Col1:"img/sk8.jpg", Col2:"img/.jpg", Col3:"img/.jpg"},
]

class Photos extends Component {

  componentDidMount() {

    // var Col1 = ["img/main.jpg","main.jpg","main.jpg"]

    anime({
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
        <div className="center photosheader">
            <h1 className="title padding">
              Photos
            </h1>
        </div>

        <div className="flex-container">
          <div className="gallery">
            <div className="column">{data &&
              data.map((item, key) => {
                return <Col1 key={key} Col1={item.Col1}/>
              })
            }
            </div>
            <div className="column">{data &&
              data.map((item, key) => {
                return <Col2 key={key} Col2={item.Col2}/>
              })
            }
            </div>
            <div className="column">{data &&
              data.map((item, key) => {
                return <Col3 key={key} Col3={item.Col3}/>
              })
            }
            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default Photos;

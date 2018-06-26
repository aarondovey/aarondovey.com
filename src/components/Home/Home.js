import React, {Component} from 'react';

import anime from 'animejs';
import Reveal from 'react-reveal';

import MusicPlayer from '../MusicPlayer/MusicPlayer';

const data = [
  {name: "poop", artist: "james", image: "/img/me.jpg"},
  {name: "kerjnf", artist: "jadkfjhmes", image: "/img/me2.jpg"},
  {name: "poerkfjrop", artist: "jamersdes", image: "/img/me3.jpg"},
  {name: "wrrf", artist: "jukllo", image: "/img/me4.jpg"},
  {name: "tjutj", artist: "ethett", image: "/img/me5.jpg"},
]

class Home extends Component {

  animate() {

    anime({
      targets: '.james',
      opacity: [0,1],
      duration: 6000,
      elasticity: 1,
    })

    }

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

   return (
      <div className="Home">

        <div className="pg1 center">
            <svg width="70%" className="lineDrawing">
              <g className="lines">
                <path d="M117.9,0V105.9H81.6v-39H48v39H11.7V0H48V37.5H81.6V0Z" transform="translate(0)"/>
                <path d="M223.5,72.5H165a14,14,0,0,0,6.2,7.2A21.2,21.2,0,0,0,182,82.2a27.7,27.7,0,0,0,9.3-1.4,32.8,32.8,0,0,0,8.2-4.7l18.2,18q-12.3,13.3-36.8,13.3-15.2,0-26.8-5.5a42.3,42.3,0,0,1-17.9-15.4,40,40,0,0,1-6.3-22.1,40.3,40.3,0,0,1,6.2-22.2,42.4,42.4,0,0,1,17.1-15.2,57.2,57.2,0,0,1,47.7-.5,39.8,39.8,0,0,1,16.8,14.7Q224,51,224,64.5,224,65.2,223.5,72.5ZM169,47.8a13.6,13.6,0,0,0-4.6,8.2h27.1a13.9,13.9,0,0,0-4.6-8.1,13.5,13.5,0,0,0-8.9-3A13.7,13.7,0,0,0,169,47.8Z" transform="translate(0)"/>
                <path d="M327.2,23.2l-34.6,84.4q-6.6,16.2-16.5,22.7t-24.2,6.5a51.7,51.7,0,0,1-14.2-2,32.1,32.1,0,0,1-11.3-5.4l11.5-23.5a22.9,22.9,0,0,0,5.9,3.2,18.6,18.6,0,0,0,6.4,1.2q5.7,0,8.6-3.3L223.4,23.2h35.7l17.4,44.3,17.7-44.3Z" transform="translate(0)"/>
                <path d="M358.3,73.7q5.7,5.3,5.7,14.1a29.7,29.7,0,0,1-1.1,7.9,80.6,80.6,0,0,1-4.9,12l-10.8,22.5H325.6l7.7-25.6a16.9,16.9,0,0,1-7.4-6.6,19.3,19.3,0,0,1-2.6-10.2q0-8.8,5.7-14.1t14.6-5.3Q352.6,68.4,358.3,73.7Z" transform="translate(0)"/>
                <path d="M11.7,181.6H48V287.5H11.7Z" transform="translate(0)"/>
                <path d="M94.8,179q5.7,5.3,5.7,14.1a29.7,29.7,0,0,1-1.1,7.9,80.6,80.6,0,0,1-4.9,12L83.7,235.5H62.2l7.7-25.6a16.9,16.9,0,0,1-7.4-6.6,19.3,19.3,0,0,1-2.6-10.2q0-8.8,5.7-14.1t14.6-5.3Q89.1,173.7,94.8,179Z" transform="translate(0)"/>
                <path d="M247.2,212.5q9.2,9.2,9.2,27.8v47.2H221.5V246.2q0-14.2-9.4-14.2a9.8,9.8,0,0,0-7.9,3.6q-3,3.6-3,11.5v40.4H166.4V246.2q0-14.2-9.4-14.2a9.8,9.8,0,0,0-7.9,3.6q-3,3.6-3,11.5v40.4H111.3V204.8h33.1v7.7q9.4-9.2,23.9-9.2a36.2,36.2,0,0,1,15.2,3.1,26.6,26.6,0,0,1,11.1,9.5,34.2,34.2,0,0,1,12.3-9.3,38.2,38.2,0,0,1,15.9-3.3Q238,203.2,247.2,212.5Z" transform="translate(0)"/>
                <path d="M85.1,450.7h-41l-7.2,18.5H0L47.1,363.2H82.8l47.1,105.9H92.4Zm-10-25.7L64.7,398.3,54.2,424.9Z" transform="translate(0)"/>
                <path d="M206.3,394.6q11.7,9.8,11.7,30v44.5H185.7V458.2q-6,12.4-23.9,12.4-10,0-17-3.4a24.9,24.9,0,0,1-10.6-9.2,24.3,24.3,0,0,1-3.6-13.1q0-12.3,9.5-18.6t28.9-6.4h14q-1.7-9.7-15.9-9.7a40.4,40.4,0,0,0-11.5,1.7,32.7,32.7,0,0,0-10,4.8l-11.1-22.5a61.8,61.8,0,0,1,17.5-6.9,85.8,85.8,0,0,1,20.4-2.5Q194.6,384.8,206.3,394.6Zm-27.4,53.5a11.4,11.4,0,0,0,4.3-5.9v-5.8h-8.6q-10.6,0-10.6,7a6,6,0,0,0,2.2,4.8,9.1,9.1,0,0,0,6.1,1.9A11.6,11.6,0,0,0,178.9,448.1Z" transform="translate(0)"/>
                <path d="M293.4,384.8v30.3a53.9,53.9,0,0,0-7.7-.6q-17.9,0-17.9,17.9v36.8H233.1V386.3h33.1v8.9Q275.4,384.8,293.4,384.8Z" transform="translate(0)"/>
                <path d="M321.8,465.1a43,43,0,0,1-17.5-15.3,42.1,42.1,0,0,1,0-44.3,42.5,42.5,0,0,1,17.5-15.2,61.2,61.2,0,0,1,50.5,0,41.9,41.9,0,0,1,17.4,15.2,42.5,42.5,0,0,1,0,44.3,42.5,42.5,0,0,1-17.4,15.3,60.5,60.5,0,0,1-50.5,0Zm35-25.4q3.8-4.3,3.8-12t-3.8-12a13.6,13.6,0,0,0-19.7,0q-3.9,4.2-3.8,12t3.8,12a13.4,13.4,0,0,0,19.7,0Z" transform="translate(0)"/>
                <path d="M490.4,394.1q9.5,9.2,9.5,27.8v47.2H465.1V427.8q0-14.2-10.3-14.2a12.2,12.2,0,0,0-9.5,4q-3.6,4-3.6,12.6v38.9H406.9V386.3H440v8.2a32.2,32.2,0,0,1,11.4-7.3,39.7,39.7,0,0,1,14-2.4Q481,384.8,490.4,394.1Z" transform="translate(0)"/>
                <path d="M562.2,363.2h53.1q18,0,31.8,6.4A49.6,49.6,0,0,1,668.6,388q7.6,12,7.6,28.1t-7.6,28.1a49.5,49.5,0,0,1-21.4,18.4q-13.8,6.4-31.8,6.4H562.2Zm51.6,78.1q11.7,0,18.7-6.6t7-18.5q0-12-7-18.5T613.8,391H598.6v50.2Z" transform="translate(0)"/>
                <path d="M707.7,465.1a43,43,0,0,1-17.5-15.3,42.1,42.1,0,0,1,0-44.3,42.5,42.5,0,0,1,17.5-15.2,61.2,61.2,0,0,1,50.5,0,41.9,41.9,0,0,1,17.4,15.2,42.5,42.5,0,0,1,0,44.3,42.5,42.5,0,0,1-17.4,15.3,60.5,60.5,0,0,1-50.5,0Zm35-25.4q3.8-4.3,3.8-12t-3.8-12a13.6,13.6,0,0,0-19.7,0q-3.8,4.2-3.8,12t3.8,12a13.4,13.4,0,0,0,19.7,0Z" transform="translate(0)"/>
                <path d="M884.2,386.3l-33.9,82.8h-36l-33.9-82.8h35.7l16.9,44.3,18.2-44.3Z" transform="translate(0)"/>
                <path d="M976.4,435.7H917.9a14,14,0,0,0,6.2,7.2,21.2,21.2,0,0,0,10.8,2.5,27.6,27.6,0,0,0,9.3-1.4,32.8,32.8,0,0,0,8.2-4.7l18.2,18q-12.3,13.3-36.8,13.3-15.2,0-26.8-5.5a42.3,42.3,0,0,1-17.9-15.4,42.2,42.2,0,0,1-.1-44.3,42.4,42.4,0,0,1,17.1-15.2,57.2,57.2,0,0,1,47.7-.5,39.8,39.8,0,0,1,16.8,14.7q6.2,9.7,6.2,23.2Q976.8,428.4,976.4,435.7ZM921.9,411a13.6,13.6,0,0,0-4.6,8.2h27.1a13.9,13.9,0,0,0-4.6-8.1,13.5,13.5,0,0,0-8.9-3A13.7,13.7,0,0,0,921.9,411Z" transform="translate(0)"/>
                <path d="M1080,386.3l-34.6,84.4q-6.6,16.2-16.5,22.7t-24.2,6.5a51.7,51.7,0,0,1-14.2-2,32.1,32.1,0,0,1-11.3-5.4l11.5-23.5a22.9,22.9,0,0,0,5.9,3.2,18.6,18.6,0,0,0,6.4,1.2q5.7,0,8.6-3.3l-35.4-83.8H1012l17.4,44.3,17.7-44.3Z" transform="translate(0)"/>
            </g>
            </svg>

          </div>

            <div className="pg3 center">
                <h1 className="header padding" >
                  Who the hell is aaron dovey? 🤔
                </h1>
                  <p className="desc padding">
                    I'm just another creator with a vision of changing the world in some way or another for the better.
                  </p>
                <img src="/img/me.jpg" alt="photo of me" className="img padding"/>
            </div>

            <Reveal effect="something" wait={500} onReveal={() => this.animate()}>
              <div className="pg3 center">
                <h1 className="header padding">
                  Music
                </h1>
                  <p className="desc padding">
                    Someitmes I make music, sometimes I think it should be on my site.
                  </p>
              </div>
              <div className="music-grid">
                {data &&
                  data.map((item, key) => {
                    return <MusicPlayer key={key} name={item.name} artist={item.artist} image={item.image}/>
                  })
                }
              </div>
            </Reveal>

          </div>
    );
  }
}

export default Home;

import React from 'react';
import anime from 'animejs';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Nav extends React.Component {

  componentDidMount() {
    var navopen = anime.timeline({
      autoplay: false,
      direction: 'reverse',
      duration: 500,
      easing: [1,0.2,0.2,1],
      elasticity: 1,
    });

    navopen

    .add({
      targets: '.circle',
      offset: 0,
      backgroundColor: [
        {value: '#fff'},
        {value: '#000'}
      ],
      delay: 50,
      duration: 800
    })

    .add({
      targets: '.line-bottom',
      offset: 0,
      rotate: ['0.5turn','0.125turn'],
      translateY: [11,0],
      delay: 200,
      backgroundColor: [
         {value: '#000'},
         {value: '#d8d8da'},
       ],
    })

    .add({
      targets: '.line-top',
      offset: 0,
      rotate: ['-0.5turn','-0.125turn'],
      translateY: [-11,0],
      delay: 200,
      backgroundColor: [
         {value: '#000'},
         {value: '#d8d8da'},
       ],
    })

    .add({
      targets: '.line-mid',
      offset: 0,
      width: [30,0],
      opacity: [1,0],
      backgroundColor: [
         {value: '#000'},
         {value: '#fff'},
       ],
    })

    .add({
      targets: '.nav',
      offset: 0,
      translateY: ['-100vh','0'],
      delay: 50,
      duration: 800,
      opacity: ["0","1"],
    })

    .add({
      targets: '#bottom',
      offset: 0,
      translateY: ['100vh','0'],
      delay: 50,
      duration: 800,
      opacity: ["0","1"],
    })

    .add({
      targets: '.home',
      offset: 240,
      translateY: ['-1000','0'],
      delay: 100,
    })

    .add({
      targets: '.photos',
      offset: 180,
      translateY: ['-1000','0'],
      delay: 100
    })

    .add({
      targets: '.music',
      offset: 100,
      translateY: ['-1000','0'],
      delay: 100
    })
    ;

    var home = anime.timeline({
      autoplay: false,
      direction: 'reverse',
      duration: 500,
      easing: [1,0.2,0.2,1],
      elasticity: 1,
    });

    home

    .add({
      targets: '.home',
      offset: 0,
      duration: 300,
      rotate: "360deg",
    })
    ;


    document.querySelector('.circle').onclick = function() {
      navopen.play();
      navopen.reverse();
    }

    document.querySelector('.home').onclick = function() {
      navopen.play();
      navopen.reverse();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    document.querySelector('.photos').onclick = function() {
      navopen.play();
      navopen.reverse();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    document.querySelector('.music').onclick = function() {
      navopen.play();
      navopen.reverse();
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  }

  render() {
    return(
      <div className="Nav">
        <Fade reveal="fade">
          <div className="circle">
            <div className="line-top"></div>
            <div className="line-mid"></div>
            <div className="line-bottom"></div>
          </div>
        </Fade>

        <div className="nav" id="bottom"></div>

        <div className="nav center">
            <ul className="nav-group">
              <Link to="/" className="nav-item home"><span role="img" aria-label="house">🏡</span></Link>
              <Link to="/photos" className="nav-item photos"><span role="img" aria-label="camera">📷</span></Link>
              <Link to="/music" className="nav-item music"><span role="img" aria-label="music">🎵</span></Link>
            </ul>
        </div>

      </div>
    )
  }
}

export default Nav;

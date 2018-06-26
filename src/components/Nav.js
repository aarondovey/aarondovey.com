import React from 'react';
import anime from 'animejs';
import {Link} from 'react-router-dom';

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
         {value: '#d8d8da'},
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
      delay: 200
    })

    .add({
      targets: '.work',
      offset: 180,
      translateY: ['-1000','0'],
      delay: 200
    })

    .add({
      targets: '.music',
      offset: 100,
      translateY: ['-1000','0'],
      delay: 200
    })

    .add({
      targets: '.circle',
      offset: 0,
      backgroundColor: [
         {value: '#d8d8da'},
         {value: '#000'},
       ],
      delay: 50,
      duration: 800
    });

    document.querySelector('.circle').onclick = function() {
      navopen.play();
      navopen.reverse();
    }

    document.querySelector('.home').onclick = function() {
      navopen.play();
      navopen.reverse();
    }

    document.querySelector('.photos').onclick = function() {
      navopen.play();
      navopen.reverse();
    }

    document.querySelector('.music').onclick = function() {
      navopen.play();
      navopen.reverse();
    }
  }

  render() {
    return(
      <div className="Nav">
        <div className="circle">
          <div className="line-top"></div>
          <div className="line-mid"></div>
          <div className="line-bottom"></div>
        </div>

        <div className="nav" id="bottom"></div>

        <div className="nav center">
            <ul className="nav-group">
              <Link to="/" className="nav-item home">home</Link>
              <Link to="/photos" className="nav-item photos">photos</Link>
              <Link to="/music" className="nav-item music">music</Link>
            </ul>
        </div>
      </div>
    )
  }
}

export default Nav;

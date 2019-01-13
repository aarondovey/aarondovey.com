import React, {Component} from 'react';
// import MusicPlayer from "./MusicPlayer/MusicPlayer";
import ReactPlayer from 'react-player'

// const data = [
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
// ]

const bgImage = "./img/main.JPG";

class Music extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: false
    }
  }

  componentDidMount() {

  }

  pause() {

  }

  render() {
    console.log(this.state);
    const {playing, duration, data} = this.state;
    return(
      <div>
        <div className="pg3 center">
          <h1 className="title padding">
            Music
          </h1>
        </div>
        <div className="row center-xs middle-xs space">
          <div className="col-lg-3 col-md-3">
            <ReactPlayer
              className="hide"
              url={"./audio/daf.mp3"}
              playing={playing}
              onPlay={() => this.setState({playing: true})}
              onPause={() => this.setState({playing: false})}
              onProgress={(data) => this.setState({data})}
              onDuration={(duration) => this.setState({duration})}
              controls={false}
            />

            <div className="MusicPlayer" onClick={() => this.setState({playing: !playing})}>
              <img src={bgImage} className="Artwork" alt=""/>
              <img src={playing ? './img/pause.svg' : './img/play.svg'} className="play" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 col-lg-offset-1 col-md-6">
            <p className="left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'</p>
            <h1>duration {duration}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Music;

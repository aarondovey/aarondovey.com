import React, {Component} from 'react';
// import MusicPlayer from "./MusicPlayer/MusicPlayer";
import ReactPlayer from 'react-player'

// const data = [
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
//   {name: "poop", artist: "james", image: "/img/me.jpg", song: "/audio/daf.mp3"},
// ]

class Music extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playing: true,
      text: 'hello'
    }
  }

  componentDidMount() {
    console.log("hello aaron");
  }

  pause() {

  }

  render() {
    console.log(this.state);
    return(
      <div>
        <div className="pg3 center">
          <h1 className="title padding">
            Music
          </h1>
          <ReactPlayer url={"./audio/daf.mp3"} onPause={() => this.setState({playing: false})} controls playing/>
        </div>
        <div className="music-grid">
          {/* {data &&
            data.map((item, key) => {
              return <MusicPlayer key={key} name={item.name} artist={item.artist} image={item.image} song={item.song}/>
            })
          } */}

        </div>
      </div>
    )
  }
}

export default Music;

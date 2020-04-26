import React from 'react';
import './App.css';

const data = [
  {id: "Base Drum", letter: "Q", src: "http://cd.textfiles.com/maxsounds/WAV/EFEITOS/BD0025.WAV"},
  {id: "Snare Drum", letter: "W", src: "http://s1download-universal-soundbank.com/wav/4402.wav"},
  {id: "Kick Drum", letter: "E", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Perfect%20Kick%20Drum%2014-9411-Free-Loops.com.mp3"},
  {id: "High Hat", letter: "A", src: "http://www.denhaku.com/r_box/sr16/sr16hat/smallhat.wav"},
  {id: "Bongo", letter: "S", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bongos%2001.wav-9261-Free-Loops.com.mp3"},
  {id: "Laser", letter: "D", src: "http://cd.textfiles.com/warcraftm/MCRAFT/SOUNDS/MAZEICON.WAV"},
  {id: "Cowbell", letter: "Z", src: "http://www.denhaku.com/r_box/tr707/cowbell.wav"},
  {id: "Meow", letter: "X", src: "http://mattersofgrey.com/audio/Minecraft-meow2.mp3"},
  {id: "Cymbal", letter: "C", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Ride%2003-5850-Free-Loops.com.mp3"}

]

class Drumpad extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  handleKeyDown = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currenTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
 
  render() {
       return (
        <div className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
        > 
          <h2>{this.props.letter}</h2>
          <audio 
            ref={ref => this.audio = ref}
            className="clip"
            id={this.props.letter}
            src={this.props.src}>
          </audio>
        </div>
      )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      display: 'Click or press a key '
    }
  }
  
  handleDisplay = display => this.setState({ display })

  render() {
    return(
      <div id="drum-machine">
        <h1>{this.state.display}</h1>
        <div id="display">
          {data.map(d => (
            <Drumpad 
            id={d.id}
            letter={d.letter}
            src={d.src}
             handleDisplay={this.handleDisplay}
             />
          ))}
          </div>

      </div>
    )
  }
}

export default App


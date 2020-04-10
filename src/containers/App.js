import React, { Component } from 'react';
import BPMStatus from '../components/BPMStatus';
import BPMRange from '../components/BPMRange';
import PlayButton from '../components/PlayButton';
import Icon from '../components/Icon';
import beep from './beep.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      range: "50"
    }
    this.timer = null;
    this.audio = new Audio(beep);
    this.interval = (60 / parseInt(this.state.range)) * 1000;
  }

  componentDidUpdate(...prevs) {
    const [, prevState] = prevs;

    // * prevent 1 beat late
    if (prevState.isPlay !== this.state.isPlay) {
      if (this.state.isPlay) {
        this.playAudio();
      }
    }
  }

  onChangeRange = event => {
    this.interval = (60 / parseInt(event.target.value)) * 1000;
    if (this.state.isPlay) {
      this.audio.pause();
      clearInterval(this.timer);
      this.timer = setInterval(this.playAudio, this.interval);
    }
    this.setState({ range: event.target.value });
  }

  onPlay = () => {
    if (this.state.isPlay) {
      this.audio.pause();
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(this.playAudio, this.interval);
    }
    this.setState({ isPlay: !this.state.isPlay });
  }

  playAudio = () => {
    this.audio.play();
  }

  render() {
    return (
      <div className="container pa1 w-80 ml-auto mr-auto">
        <div className="flex flex-wrap items-center pa2">
          <BPMStatus range={this.state.range} />
          <PlayButton onPlay={this.onPlay}>
            <Icon iconState={this.state.isPlay} />
          </PlayButton>
        </div>
        <BPMRange rangeChange={this.onChangeRange} />
        <div>
          <p className="tj">A metronome, from ancient Greek (métron, "measure") and (némo, "I manage", "I lead"),
          is a device that produces an audible click or other sound at a regular interval
          that can be set by the user, typically in beats per minute (BPM)
          </p>
        </div>
        <footer className="tc pa2">
          <a href="https://github.com/fabianvieri/simple-metronome" className="link">
            <FontAwesomeIcon icon={["fab", "github"]} className="f1 gray" />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;

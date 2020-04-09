import React, { Component } from 'react';
import './App.css';
import BPMStatus from '../components/BPMStatus';
import BPMRange from '../components/BPMRange';
import PlayButton from '../components/PlayButton';
import Icon from '../components/Icon';
import beep from './beep.mp3';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      range: "40"
    }
    this.timer = null;
    this.audio = new Audio(beep);
  }

  onChangeRange = event => {

    if (this.state.isPlay) {
      clearInterval(this.timer);
      const currRange = parseInt(this.state.range);
      const interval = (60 / currRange) * 1000;
      this.timer = setInterval(this.playAudio, interval);
    }
    this.setState({ range: event.target.value });
  }

  onPlay = () => {
    if (this.state.isPlay) {
      clearInterval(this.timer);
      this.setState({ isPlay: false });
    } else {
      const currRange = parseInt(this.state.range);
      const interval = (60 / currRange) * 1000;
      this.timer = setInterval(this.playAudio, interval);
      this.setState({ isPlay: true }, this.playAudio);
    }

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
      </div>
    );
  }
}

export default App;

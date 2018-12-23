import React from 'react';
import MajorClock from './components/MajorClock';
import ControlButtons from './components/ControlButtons';
import SplitTimes from './components/SplitTimes';

class StopWatch extends React.Component {
  state = {
    activated: false,
    isStarted: false,
    startTime: null,
    currentTime: null,
    splits: [],
  };

  render() {
    const {isStarted, startTime, currentTime, splits} = this.state;
    return (
        <>
          <MajorClock milliseconds={currentTime - startTime}/>
          <ControlButtons
              activated={isStarted}
              onStart={this.onStart}
              onPause={this.onPause}
              onSplit={this.onSplit}
              onReset={this.onReset}
          />
          <SplitTimes splits={splits}/>
        </>
    );
  }

  onSplit = () => {
    this.setState({
      splits: this.state.splits.concat(this.state.currentTime -
          this.state.startTime),
    });
  };

  onStart = () => {
    this.setState({
      isStarted: true,
      startTime: new Date(),
      currentTime: new Date(),
    });

    this.intervalHandle = setInterval(() => {
      this.setState({currentTime: new Date()});
    }, 1000 / 60);
  };

  onPause = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      isStarted: false,
    });
  };

  onReset = () => {
    this.setState({
      startTime: null,
      currentTime: null,
      splits: [],
    });
  };
}

export default StopWatch;
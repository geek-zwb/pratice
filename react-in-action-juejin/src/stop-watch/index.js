import React from 'react';
import MajorClock from './components/MajorClock';
import ControlButtons from './components/ControlButtons';
import SplitTimes from './components/SplitTimes';

class StopWatch extends React.Component {
  state = {
    activated: false
  };
  render() {
    return (
        <>
          <MajorClock milliseconds={1000} />
          <ControlButtons
              activated={this.state.activated}
              onStart={this.activated}
              onPause={this.onStart}
              onSplit={this.onPause}
              onReset={this.onSplit}
          />
          <SplitTimes splits={[]} />
          </>
    );
  }
}

export default StopWatch;
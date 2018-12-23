import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = props => {
  return (
  <div>
    <button onClick={props.onSplit}>计次</button>
    <button onClick={props.onReset}>复位</button>
    <button onClick={props.onStart}>启动</button>
    <button onClick={props.onPause}>暂停</button>
  </div>
  );
};

ControlButtons.propTypes = {
  activated: PropTypes.bool,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onSplit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default ControlButtons;
import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = props => {
  return (
      <div>
        {props.activated ?
            <>
              <button className="ctrl-btn" onClick={props.onSplit}>计次</button>
              <button className="ctrl-btn" onClick={props.onPause}>暂停</button>
            </> :
            <>
              <button className="ctrl-btn" onClick={props.onReset}>复位</button>
              <button className="ctrl-btn" onClick={props.onStart}>启动</button>
            </>
        }
        <style jsx>{`
          .ctrl-btn {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        `}</style>
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
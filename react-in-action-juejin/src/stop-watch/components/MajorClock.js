import React from 'react';
import PropTypes from 'prop-types';
import {ms2Time} from '../libs/util';

class MajorClock extends React.Component {
  render() {
    const milliseconds = this.props.milliseconds;
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
          {ms2Time(milliseconds)}
        </div>
    );
  }
}

MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired
};

export default MajorClock;
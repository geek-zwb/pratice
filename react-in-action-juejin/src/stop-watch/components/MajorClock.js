import React from 'react';
import PropTypes from 'prop-types';
import {ms2Time} from '../libs/util';

const MajorClock = React.memo((props) => (
    <div style={{display: 'flex', alignItems: 'center'}}>
      {ms2Time(props.milliseconds)}
    </div>
));

MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired
};

export default MajorClock;
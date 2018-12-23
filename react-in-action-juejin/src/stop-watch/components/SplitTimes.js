import React from 'react';
import PropTypes from 'prop-types';
import MajorClock from './MajorClock';

const SplitTimes = ({splits=[]}) => {
  return splits.map((v, k) => (
      <MajorClock key={k} milliseconds={v} />
  ));
};

SplitTimes.propTypes = {
  splits: PropTypes.array,
};

export default SplitTimes;

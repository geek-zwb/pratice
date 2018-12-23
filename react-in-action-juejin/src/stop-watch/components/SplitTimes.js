import React from 'react';
import PropTypes from 'prop-types';

const SplitTimes = props => {
  return (
      <div>
        <div>计次</div>
        {props.splits.map(split => split + '  ')}
      </div>
  );
};

SplitTimes.propTypes = {
  splits: PropTypes.array,
};

export default SplitTimes;

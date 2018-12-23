import React from 'react';
import PropTypes from 'prop-types';

class MajorClock extends React.Component {
  render() {
    const milliseconds = this.props.milliseconds;
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
          {milliseconds}
        </div>
    );
  }
}

MajorClock.propTypes = {
  milliseconds: PropTypes.number.isRequired
};

export default MajorClock;
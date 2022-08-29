import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const star = [];

  for (let index = 0; index < 5; index++) {
    if (index < props.rating) {
      star.push('./../images/dfds.png');
    } else {
      star.push('./../images/hgfh.png');
    }
  }
  return (
    <Fragment>
      <div className='wrapper__rating-star'>
        {star.map((obj) => {
          return <img src={obj} alt='' />;
        })}
      </div>
    </Fragment>
  );
};
Rating.propTypes = {
  rating: PropTypes.number,
};
export default Rating;

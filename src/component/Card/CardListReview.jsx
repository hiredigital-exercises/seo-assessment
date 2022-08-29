import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../Other/Rating';

const CardListReview = (props) => {
  return (
    <>
      <div className='wrapper__list-review'>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <div className='profile d-flex align-items-center justify-content-between'>
            <img src={props.data.profile} className='img' alt='' />
            <div className='ml-3'>
              <h5 className='medium cardo font__size--16 text__16-1024 mb-2'>{props.data.name}</h5>
              <Rating rating={props.data.rating} />
            </div>
          </div>
          <p className='mb-0 medium font__size--14 text__14-1024'>{props.data.date}</p>
        </div>
        <p className='font__size--14 text__14-1024 normal lh-2'>{props.data.description}</p>
      </div>
    </>
  );
};

CardListReview.propTypes = {
  data: PropTypes.object,
};

export default CardListReview;

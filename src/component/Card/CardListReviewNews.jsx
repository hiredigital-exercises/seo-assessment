import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const CardListReviewNews = (props) => {
  return (
    <Fragment>
      <div className='wrapper__list-review noLine'>
        <div className='d-flex justify-content-between mb-4'>
          <div className='profile d-flex justify-content-between'>
            <img src={props.data.profile} className='img' alt='' />
            <div className='ml-3'>
              <h5 className='medium cardo font__size--16 text__16-1024 mb-2'>{props.data.name}</h5>
              <p className='font__size--14 text__14-1024 normal lh-2'>{props.data.description}</p>
            </div>
          </div>
          <p className='mb-0 medium font__size--14 text__14-1024 ml-3'>{props.data.date}</p>
        </div>
      </div>
    </Fragment>
  );
};
CardListReviewNews.propTypes = {
  data: PropTypes.object,
};
export default CardListReviewNews;

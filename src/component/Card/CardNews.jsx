import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardNews = (props) => {
  return (
    <Fragment>
      <div className='wrapper__card-news'>
        <div className='images position-relative'>
          <div className='normal font__size--14 text__14-1024 tag'>{props.obj.tag}</div>
          <img src={props.obj.img} alt='' />
        </div>
        <div className='desc'>
          <div className='d-flex align-items-center justify-content-between mb-3'>
            <h5 className='mb-0 cardo normal font__size--24 text__24-1024'>{props.obj.title}</h5>
            <span className='normal font__size--14 text__14-1024 ml-3'>{props.obj.date}</span>
          </div>
          <p className='normal font__size--14 text__14-1024 lh-2'>{props.obj.desc}</p>

          <div className='mt-4'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center profile'>
                <img src={props.obj.profile} alt='' />
                <span className='ml-3 normal font__size--16 text__16-1024'>{props.obj.name}</span>
              </div>
              <NavLink
                to='/detail-news'
                className='normal font__size--14 text__14-1024 color__darkblue'
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
CardNews.propTypes = {
  obj: PropTypes.object,
};
export default CardNews;

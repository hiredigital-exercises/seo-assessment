import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardProductList = (props) => {
  const [love, setLove] = useState(false);
  return (
    <Fragment>
      <div className='wrapper__card-list-property'>
        <div className='images position-relative'>
          <img src={props.obj.img} alt='' />
          <div className={'love pointer ' + (love ? 'active' : '')} onClick={() => setLove(!love)}>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.1433 3.12357C9.7733 3.14273 10.3833 3.25273 10.9743 3.45373H11.0333C11.0733 3.47273 11.1033 3.49373 11.1233 3.51273C11.3443 3.58373 11.5533 3.66373 11.7533 3.77373L12.1333 3.94373C12.2833 4.02373 12.4633 4.17273 12.5633 4.23373C12.6633 4.29273 12.7733 4.35373 12.8633 4.42273C13.9743 3.57373 15.3233 3.11373 16.7133 3.12357C17.3443 3.12357 17.9743 3.21273 18.5733 3.41373C22.2643 4.61373 23.5943 8.66373 22.4833 12.2037C21.8533 14.0127 20.8233 15.6637 19.4743 17.0127C17.5433 18.8827 15.4243 20.5427 13.1433 21.9727L12.8933 22.1237L12.6333 21.9627C10.3443 20.5427 8.2133 18.8827 6.2643 17.0027C4.9243 15.6537 3.8933 14.0127 3.2533 12.2037C2.1233 8.66373 3.4533 4.61373 7.1843 3.39273C7.4743 3.29273 7.7733 3.22273 8.0733 3.18373H8.1933C8.4743 3.14273 8.7533 3.12357 9.0333 3.12357H9.1433ZM18.0533 6.28373C17.6433 6.14273 17.1933 6.36373 17.0433 6.78373C16.9033 7.20373 17.1233 7.66373 17.5433 7.81273C18.1843 8.05273 18.6133 8.68373 18.6133 9.38273V9.41373C18.5943 9.64273 18.6633 9.86373 18.8033 10.0337C18.9433 10.2037 19.1533 10.3027 19.3733 10.3237C19.7833 10.3127 20.1333 9.98373 20.1633 9.56273V9.44373C20.1933 8.04273 19.3443 6.77373 18.0533 6.28373Z'
                fill='#201D25'
                fillOpacity='0.26'
              />
            </svg>
          </div>
        </div>
        <div className='desc'>
          <div
            className={'normal font__size--14 text__14-1024 mb-4 status ' + props.obj.statusClass}
          >
            {props.obj.status}
          </div>
          <h5 className='normal font__size--24 text__24-1024 cardo mb-2'>{props.obj.name}</h5>
          <div className='d-flex align-items-center normal font__size--14 text__14-1024 color__gray-2 mb-2'>
            <img src='./../images/location (3) 1.png' className='mr-2' alt='' />
            {props.obj.location}
          </div>
          <div className='d-flex align-items-center medium font__size--12 mb-4'>
            <div className='d-flex align-items-center mr-3'>
              <img src='./../images/Icon - Bed.png' className='mr-1' alt='' />1 bed
            </div>
            <div className='d-flex align-items-center mr-3'>
              <img src='./../images/Icon - Bathtub.png' className='mr-1' alt='' />1 bath
            </div>
            <div className='d-flex align-items-center'>
              <img src='./../images/Icon - Expand.png' className='mr-1' alt='' />
              732 sq ft
            </div>
          </div>

          <div className='d-flex justify-content-between align-items-center'>
            <div className='semi-bold font__size--20 text__20-1024 color__brown'>
              $4,321
              <span className='normal font__size--12 color__gray-2'>/ month</span>
            </div>
            <NavLink
              to='/product-detail'
              className='semi-bold font__size--14 text__14-1024 btn btn__brown btn__outlined--brown btn__product no__opacity shadow'
            >
              See Detail
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
CardProductList.propTypes = {
  obj: PropTypes.object,
};
export default CardProductList;

import React from 'react';
import { NavLink } from 'react-router-dom';

const CardBanner = () => {
  return (
    <>
      <div className='wrapper__banner-looking bg__darkblue position-relative'>
        <img src='./../images/Image.png' className='path__1 d-none d-lg-block' alt='' />
        <div className='row position-relative z-2'>
          <div className='col-lg-9 offset-lg-3'>
            <div className='row'>
              <div className='col-md-8 my-md-auto text-center text-md-left mb-4'>
                <h5 className='normal font__size--38 cardo color__white mb-2 mb-md-3'>
                  Looking for a{' '}
                  <span className='position-relative line__under'>
                    Dream Home?
                    <img src='./../images/Element.png' alt='' />
                  </span>
                </h5>
                <p className='medium font__size--14 text__14-1024 color__white mb-0'>
                  We can help you relize your dream of a new home
                </p>
              </div>
              <div className='col-md-4 my-auto text-center text-md-right'>
                <NavLink
                  to='/shop'
                  className='semi-bold font__size--14 text__14-1024 color__white btn btn__brown btn__original shadow'>
                  Explore Properties
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBanner;

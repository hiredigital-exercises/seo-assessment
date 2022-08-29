import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const ListProductCart = (props) => {
  const [number, setNumber] = useState(1);

  const onClickNumber = (e) => {
    if (e == 'plus') {
      return setNumber(number + 1);
    }

    if ((e = 'min') && number > 1) {
      return setNumber(number - 1);
    }
  };
  return (
    <Fragment>
      <div className='wrapper__card-wishlist position-relative'>
        <div className='flex__group d-flex justify-content-between align-items-center'>
          <div className='item d-flex align-items-center'>
            <img src={props.data.img} className='img' alt='' />
            <div className='ml-4'>
              <h5 className='normal font__size--24 text__24-1024 cardo mb-3 mb-lg-0'>
                {props.data.name}
              </h5>
              <div className='d-flex d-lg-none align-items-center justify-content-between'>
                <div className='wrapper__count-stock d-flex justify-content-center align-items-center'>
                  <div
                    className='items flex-shrink-0 pointer'
                    onClick={() => onClickNumber('plus')}
                  >
                    <img src='./../images/Icon - Plus.png' alt='' />
                  </div>
                  <div className='medium font__size--16 text__16-1024 mx-2'>0{number}</div>
                  <div className='items flex-shrink-0 pointer' onClick={() => onClickNumber('min')}>
                    <img src='./../images/Icon - Minus.png' alt='' />
                  </div>
                </div>
                <h5 className='item mb-0 font__size--16 text__16-1024 semi-bold'>
                  ${props.data.price}
                </h5>
              </div>
            </div>
          </div>

          <h5 className='item mb-0 font__size--16 text__16-1024 semi-bold d-none d-lg-block'>
            ${props.data.price}
          </h5>

          <div className='item wrapper__count-stock d-lg-flex justify-content-center align-items-center d-none'>
            <div className='items flex-shrink-0 pointer' onClick={() => onClickNumber('plus')}>
              <img src='./../images/Icon - Plus.png' alt='' />
            </div>
            <div className='medium font__size--16 text__16-1024 mx-2'>0{number}</div>
            <div className='items flex-shrink-0 pointer' onClick={() => onClickNumber('min')}>
              <img src='./../images/Icon - Minus.png' alt='' />
            </div>
          </div>

          <h5 className='mb-0 font__size--16 text__16-1024 semi-bold d-none d-lg-block'>
            ${props.data.price}
          </h5>
          <img src='./../images/Icon - Close.png' className='pointer remove' alt='' />
        </div>
      </div>
      <hr className='my-4' />
      <div className='d-flex d-lg-none align-items-center justify-content-between mb-5'>
        <span className='medium font__size--14 text__14-1024'>Total Price</span>
        <h5 className='mb-0 font__size--16 text__16-1024 semi-bold'>${props.data.price}</h5>
      </div>
    </Fragment>
  );
};
ListProductCart.propTypes = {
  data: PropTypes.object,
};

export default ListProductCart;

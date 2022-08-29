import React from 'react';
import PropTypes from 'prop-types';

const CardHead = ({ title, subtitle }) => {
  return (
    <>
      <section className='bg__gray-1'>
        <div className='container'>
          <h5 className='font__size--48  text__48-1024 text__48-md text__48-sm text__48-xxs  cardo normal'>
            {title}
          </h5>
          <p className='normal font__size--16 text__16-1024s mb-0'>
            <span className='color__gray-2'>Home /</span>{' '}
            <span className='semi-bold'>{subtitle}</span>
          </p>
        </div>
      </section>
    </>
  );
};

CardHead.propTypes = {
  title: PropTypes.text,
  subtitle: PropTypes.text,
};

export default CardHead;

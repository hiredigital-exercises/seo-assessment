import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const ListCheck = (props) => {
  const checked = ['home1'];

  const checkChecked = (e) => {
    return checked.filter((b) => (b == e ? true : false));
  };
  return (
    <Fragment>
      <ul className='list__checked'>
        {props.list.map((obj) => {
          return (
            <li>
              <div className='d-flex justify-content-between align-items-center pointer '>
                <div className='d-flex align-items-center'>
                  <svg
                    width='25'
                    height='24'
                    viewBox='0 0 25 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.3439 1.99991C19.7339 1.99991 22.0039 4.37991 22.0039 7.91991V16.0909C22.0039 19.6199 19.7339 21.9999 16.3439 21.9999H7.67391C4.28391 21.9999 2.00391 19.6199 2.00391 16.0909V7.91991C2.00391 4.37991 4.28391 1.99991 7.67391 1.99991H16.3439ZM16.1839 8.99991C15.8439 8.65991 15.2839 8.65991 14.9439 8.99991L10.8139 13.1299L9.06391 11.3799C8.72391 11.0399 8.16391 11.0399 7.82391 11.3799C7.48391 11.7199 7.48391 12.2699 7.82391 12.6199L10.2039 14.9899C10.3739 15.1599 10.5939 15.2399 10.8139 15.2399C11.0439 15.2399 11.2639 15.1599 11.4339 14.9899L16.1839 10.2399C16.5239 9.89991 16.5239 9.34991 16.1839 8.99991Z'
                      fill='#E3E2E2'
                    />
                  </svg>
                  <span className='normal font__size--16 text__16-1024 ml-2'>{obj.name}</span>
                </div>
                <span className='normal font__size--16 text__16-1024 ml-2'>{obj.count}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
ListCheck.propTypes = {
  list: PropTypes.array,
};
export default ListCheck;

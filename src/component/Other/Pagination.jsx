import React, { Component, Fragment } from 'react';

const Pagination = (props) => {
  return (
    <Fragment>
      <nav aria-label='Page navigation example' className='wrapper__pagination'>
        <ul className='pagination justify-content-center'>
          <li className='page-item'>
            <a
              className='page-link medium font__size--14 text__14-1024'
              href='#'
              aria-label='Previous'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12.29 15.2899L9.7 12.6999C9.31 12.3099 9.31 11.6799 9.7 11.2899L12.29 8.69995C12.92 8.06995 14 8.51995 14 9.40995L14 14.5899C14 15.4799 12.92 15.9199 12.29 15.2899Z'
                  fill='#38343D'
                />
              </svg>
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link medium font__size--14 text__14-1024 active' href='#'>
              1
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link medium font__size--14 text__14-1024' href='#'>
              2
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link medium font__size--14 text__14-1024' href='#'>
              3
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link medium font__size--14 text__14-1024' href='#' aria-label='Next'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11.71 8.71005L14.3 11.3001C14.69 11.6901 14.69 12.3201 14.3 12.7101L11.71 15.3001C11.08 15.9301 10 15.4801 10 14.5901L10 9.41005C10 8.52005 11.08 8.08005 11.71 8.71005Z'
                  fill='#38343D'
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Pagination;

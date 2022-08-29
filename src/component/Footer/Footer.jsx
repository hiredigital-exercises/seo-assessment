import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const Footer = (props) => {
  return (
    <Fragment>
      <section className='pt-0 pb-3'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='mb-5 mb-lg-0 col-lg-3'>
              <div className='navbar-brand cardo color__black font__size--24 mb-2'>
                Home<span className='color__brown'>Q</span>
              </div>
              <p className='normal font__size--12 color__gray-2 lh-2 mb-3'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.{' '}
              </p>

              <ul className='list__footer-info'>
                <li>
                  <div className='d-flex align-items-center'>
                    <img src='./../images/Call.png' alt='' />
                    <div className='lh_-2 ml-3'>
                      <h5 className='normal font__size--12 mb-0 color__black'>Phone</h5>
                      <p className='mb-0 normal font__size--12 color__gray-2'>(208) 555-5555</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='d-flex align-items-center'>
                    <img src='./../images/Message.png' alt='' />
                    <div className='lh_-2 ml-3'>
                      <h5 className='normal font__size--12 mb-0 color__black'>Email</h5>
                      <p className='mb-0 normal font__size--12 color__gray-2'>
                        assessments@hiredigital.com
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='d-flex align-items-center'>
                    <img src='./../images/location (3) 1.png' alt='' />
                    <div className='lh_-2 ml-3'>
                      <h5 className='normal font__size--12 mb-0 color__black'>Address</h5>
                      <p className='mb-0 normal font__size--12 color__gray-2'>
                        3101 Walnut St Philadelphia, PA 19104
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='mb-5 mb-lg-0 col-6 col-lg offset-lg-1'>
              <h5 className='semi-bold font__size--12 mb-3'>Company</h5>
              <ul className='list__footer-info'>
                <li>
                  <NavLink to='/' className='normal font__size--12 color__gray-2'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about-us' className='normal font__size--12 color__gray-2'>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/shop' className='normal font__size--12 color__gray-2'>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/wishlist' className='normal font__size--12 color__gray-2'>
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/our-portofolio' className='normal font__size--12 color__gray-2'>
                    Portofolio
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='mb-5 mb-lg-0 col-6 col-lg'>
              <h5 className='semi-bold font__size--12 mb-3'>Service</h5>
              <ul className='list__footer-info'>
                <li>
                  <NavLink to='/login' className='normal font__size--12 color__gray-2'>
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/register' className='normal font__size--12 color__gray-2'>
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/map' className='normal font__size--12 color__gray-2'>
                    Location
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/faq' className='normal font__size--12 color__gray-2'>
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/news' className='normal font__size--12 color__gray-2'>
                    News
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h5 className='semi-bold font__size--12 mb-3'>Newsletter</h5>
              <p className='normal font__size--12 color__gray-2'>
                Subscribe to our newsletter and receive updates via email
              </p>

              <div className='my-3 d-flex align-items-center'>
                <div className='form-group wrapper__input-form mb-0 mr-3 w-100'>
                  <input
                    type='text'
                    className='form-control normal font__size--14 color__black'
                    placeholder='Email or Username'
                  />
                </div>

                <div className='btn__send pointer flex-shrink-0'>
                  <img src='./../images/Send.png' alt='' />
                </div>
              </div>

              <div className='mt-4'>
                <h5 className='semi-bold font__size--12 mb-3'>Social Account</h5>

                <ul className='list__footer-sosmed'>
                  <li>
                    <a href='#!'>
                      <img src='./../images/Icon - Facebook.png' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <img src='./../images/Icon - Ig.png' alt='' />
                    </a>
                  </li>
                  <li>
                    <a href='#!'>
                      <img src='./../images/Icon - Wa.png' alt='' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div style={{ visibility: 'hidden' }}>
            <div id='dialog' title='We Value Your Privacy'>
              <p>Pretend this is a standard cookie popup.</p>
            </div>
          </div>

          <script>
            {setTimeout(() => {
              window.jQuery('#dialog').dialog({
                autoOpen: true,
                show: {
                  effect: 'fade',
                  duration: 500,
                },
                hide: {
                  effect: 'fade',
                  duration: 500,
                },
              });
            }, 1000)}
          </script>

          <div className='text-center normal font__size--12 color__gray-2'>
            All Rights Reserved Hire Digital 2022
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;

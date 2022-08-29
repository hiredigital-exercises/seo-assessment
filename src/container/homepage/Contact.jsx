import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Contact = (props) => {
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Contact Us'} subtitle={'Contact Us'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10 mb-0'>
                <div className='row'>
                  <div className='col-md-4 text-center mb-4 mb-md-0'>
                    <div className='wrapper__contact-icon'>
                      <div className='icon mx-auto mb-4'>
                        <img src='./../images/Messagesad.png' alt='' />
                      </div>
                      <h5 className='normal font__size--24 text__24-1024 mb-0 cardo'>
                        Email Address
                      </h5>
                      <p className='normal font__size--14 text__14-1024 color__gray-2 mb-0'>
                        homeq.example@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className='col-md-4 text-center mb-4 mb-md-0'>
                    <div className='wrapper__contact-icon'>
                      <div className='icon mx-auto mb-4'>
                        <img src='./../images/Callsdas.png' alt='' />
                      </div>
                      <h5 className='normal font__size--24 text__24-1024 mb-0 cardo'>
                        Phone Number
                      </h5>
                      <p className='normal font__size--14 text__14-1024 color__gray-2 mb-0'>
                        (208) 555-0112
                      </p>
                    </div>
                  </div>
                  <div className='col-md-4 text-center mb-4 mb-md-0'>
                    <div className='wrapper__contact-icon'>
                      <div className='icon mx-auto mb-4'>
                        <img src='./../images/location (3) 2.png' alt='' />
                      </div>
                      <h5 className='normal font__size--24 text__24-1024 mb-0 cardo'>
                        Office Address
                      </h5>
                      <p className='normal font__size--14 text__14-1024 color__gray-2 mb-0'>
                        3517 W. Gray St. Utica, Pennsylvania 57867
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-10 col-lg-8'>
                <div className='mt-5 wrapper__form-contact'>
                  <h5 className='normal font__size--24 text__24-1024 cardo mb-4 text-center text-md-left'>
                    Get a Quote
                  </h5>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Your Name'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='email'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Email or Username'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <select className='form-control normal font__size--14 text__14-1024 color__black'>
                          <option value='' selected disabled>
                            Select Service Type
                          </option>
                          <option value=''>Service 1</option>
                          <option value=''>Service 2</option>
                          <option value=''>Service 3</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='email'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Your Phone Number'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='form-group wrapper__input-form'>
                    <textarea
                      name=''
                      id=''
                      className='form-control normal font__size--14 text__14-1024 color__black'
                      cols='30'
                      rows='10'
                      placeholder='Enter Message'></textarea>
                  </div>
                  <div className='mb-3'>
                    <div className='wrapper__field-checkbox'>
                      <input type='checkbox' id='checkbox1' name='checkbox1' value='Bike' />
                      <label htmlFor='checkbox1' className='check flex-shrink-0 mt-1 mr-2'></label>
                      <label
                        htmlFor='checkbox1'
                        className='normal font__size--12 text__16-md color__gray-2'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                      </label>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button className='semi-bold font__size--14 text__14-1024 color__white btn btn__darkblue shadow rounded-0 '>
                      Get an Free Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <CardBanner />
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;

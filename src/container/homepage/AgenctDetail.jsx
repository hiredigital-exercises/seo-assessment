import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const AgenctDetail = (props) => {
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Agent Details'} subtitle={'Agent Details'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-lg-3 mb-4 mb-md-0'>
                <div className='text-center'>
                  <img
                    src='./../images/agent/Image.jpg'
                    className='mb-3 wrapper__images-agent'
                    alt=''
                  />
                  <h5 className='semi-bold color__black font__size--18 text__18-1024'>
                    Esther Howard
                  </h5>
                  <p className='normal font__size--16 text__16-1024'>Real Estate Broker</p>
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
              <div className='col-md-8 offset-lg-1'>
                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur
                  cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas
                  fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In
                  vestibulum pretium, potenti molestie.
                </p>
                <div className='row'>
                  <div className='col-md-4'>
                    <h5 className='semi-bodl font__size--14 text__14-1024'>Positions</h5>
                    <p className='normal font__size--14 text__14-1024'>Real Estate Broker</p>
                  </div>
                  <div className='col-md-4'>
                    <h5 className='semi-bodl font__size--14 text__14-1024'>Location</h5>
                    <p className='normal font__size--14 text__14-1024'>14/A, NYC</p>
                  </div>
                  <div className='col-md-4'>
                    <h5 className='semi-bodl font__size--14 text__14-1024'>Fax</h5>
                    <p className='normal font__size--14 text__14-1024'>09-622-5689</p>
                  </div>
                  <div className='col-md-4'>
                    <h5 className='semi-bodl font__size--14 text__14-1024'>Experience</h5>
                    <p className='normal font__size--14 text__14-1024'>10+ Years</p>
                  </div>
                  <div className='col-md-4'>
                    <h5 className='semi-bodl font__size--14 text__14-1024'>Email</h5>
                    <p className='normal font__size--14 text__14-1024'>example@gmail.com</p>
                  </div>
                  <div className='col-md-4'>
                    <h5 className='semi-bodl font__size--14 text__14-1024'>Phone</h5>
                    <p className='normal font__size--14 text__14-1024'>07-4041-9059</p>
                  </div>
                </div>

                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                  fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper
                  ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing
                  arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies
                  libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque
                  tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in
                  sed arcu turpis neque.
                </p>

                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur
                  maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique
                  pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst
                  vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui
                  sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.
                </p>

                <div className='mt-5 wrapper__form-contact'>
                  <h5 className='normal font__size--24 text__24-1024 cardo mb-4'>
                    Contact for Any Inquiry
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
                      <label htmlFor='checkbox1' className='normal font__size--12 color__gray-2'>
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

export default AgenctDetail;

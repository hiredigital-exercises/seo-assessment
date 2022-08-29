import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const ServiceDetail = (props) => {
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Service Details'} subtitle={'Service Details'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 mb-4 mb-mb-0'>
                <h4 className='normal font__size--38 text__38-1024 cardo mb-4'>
                  Property Management
                </h4>
                <img
                  src='./../images/DetailService/Image (1).png'
                  className='wrapper__image-detail mb-4'
                  alt=''
                />
                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur
                  cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas
                  fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In
                  vestibulum pretium, potenti molestie.
                </p>
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

                <div className='row mb-4'>
                  <div className='col-md-6 mb-4 mb-md-0'>
                    <img
                      src='./../images/DetailService/Image (2).png'
                      className='wrapper__images-property'
                      alt=''
                    />
                  </div>
                  <div className='col-md-6'>
                    <img
                      src='./../images/DetailService/Image (3).png'
                      className='wrapper__images-property'
                      alt=''
                    />
                  </div>
                </div>

                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur
                  cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas
                  fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In
                  vestibulum pretium, potenti molestie.
                </p>
              </div>
              <div className='col-md-4 col-lg-3 offset-lg-1'>
                <h5 className='normal font__size--24 text__24-1024 mb-0 cardo'>Portofolio List</h5>
                <hr />

                <ul className='list__service'>
                  <li>
                    <a href='#!' className='normal font__size--14 text__14-1024 color__black'>
                      Home Buying
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='normal font__size--14 text__14-1024 color__black'>
                      Consulting Service
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='normal font__size--14 text__14-1024 color__black'>
                      Mortgage Service
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='normal font__size--14 text__14-1024 color__black'>
                      Home Selling
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='normal font__size--14 text__14-1024 color__black'>
                      Escrow Service
                    </a>
                  </li>
                </ul>
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

export default ServiceDetail;

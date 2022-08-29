import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import CardProductList from '../../component/Card/CardProductList';

const AboutUs = (props) => {
  const [list, setList] = useState([
    {
      img: './../images/Activity.png',
      title: 'Property Management',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/sdsf.png',
      title: 'Home Buying',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Calling.png',
      title: 'Consulting Service',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Chart.png',
      title: 'Mortgage Service',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Discount.png',
      title: 'Home Selling',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Graph.png',
      title: 'Escrow Service',
      desc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
  ]);

  const [agenct, setAgenct] = useState([
    {
      img: './../images/agent/Image.jpg',
      name: 'Esther Howard',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
    {
      img: './../images/agent/Image-2.jpg',
      name: 'Jane Cooper',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
    {
      img: './../images/agent/Image-4.jpg',
      name: 'Ronald Richards',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
    {
      img: './../images/agent/Image-6.jpg',
      name: 'Guy Hawkins',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
  ]);

  const [product, setProduct] = useState([
    {
      img: './../images/Detail/Image (1).png',
      name: 'Warm and Cozy Apartment',
      status: 'For Rent',
      statusClass: 'rent',
      location: 'Belia Gargen, California',
    },
    {
      img: './../images/Detail/Image (2).png',
      name: 'Warm and Cozy Apartment',
      status: 'For Sale',
      statusClass: 'sale',
      location: 'Belia Gargen, California',
    },
    {
      img: './../images/Detail/Image (3).png',
      name: 'Warm and Cozy Apartment',
      status: 'For Sale',
      statusClass: 'sale',
      location: 'Belia Gargen, California',
    },
  ]);
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'About Us'} subtitle={'About Us'} />

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 col-xl-4 mb-4 mb-md-0'>
                <img src='./../images/Image (1).png' className='w-100' alt='' />
              </div>
              <div className='col-md-7 offset-xl-1'>
                <h4 className='normal font__size--48 text__48-1024 text__48-md cardo mb-4'>
                  We are your partner in creating a legacy building facade.
                </h4>

                <p className='normal font__size--14 text__14-1024 text__14-1024 mb-4'>
                  Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                  fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper
                  ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing
                  arcu, consectetur lacus eu.
                </p>
                <p className='normal font__size--14 text__14-1024 text__14-1024 mb-4'>
                  Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim
                  sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra,
                  nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.
                </p>
                <p className='normal font__size--14 text__14-1024 text__14-1024 mb-4'>
                  Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur
                  maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique
                  pretium. Congue ac et neque vulputate et morbi gravida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='bg__gray-1'>
          <div className='container'>
            <h4 className='normal font__size--48 text__48-1024 text__48-md cardo text-center mb-5'>
              Our Service
            </h4>
            <div className='row'>
              {list.map((obj) => {
                return (
                  <div className='col-sm-6 col-lg-4 mb-4'>
                    <NavLink
                      to='/service-detail'
                      className='wrapper__service-card bg__white d-inline-block w-100 text-center'>
                      <div className='icon mx-auto mb-4'>
                        <img src={obj.img} alt='' />
                      </div>
                      <h5 className='normal color__black font__size--24 text__24-1024 cardo mb-0'>
                        {obj.title}
                      </h5>
                      <p className='mb-0 normal color__black font__size--14 text__14-1024'>
                        {obj.desc}
                      </p>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='d-md-flex text-center text-md-left justify-content-between align-items-center mb-4'>
              <h4 className='normal font__size--48  text__48-1024 text__48-md text__48-sm text__48-xxs cardo mb-0'>
                Our Agent
              </h4>
              <NavLink
                to='/our-agenct'
                className='normal font__size--14 text__14-1024 color__black d-none d-md-block'>
                See All
              </NavLink>
            </div>
            <div className='row mb-4'>
              {agenct.map((obj) => {
                return (
                  <div className='col-sm-6 col-lg-3 mb-4'>
                    <div className='text-center'>
                      <img src={obj.img} className='mb-3 wrapper__images-agent' alt='' />
                      <NavLink
                        to='/agenct-detail'
                        className='semi-bold color__black font__size--18 text__18-1024'>
                        {obj.name}
                      </NavLink>
                      <p className='normal font__size--16 text__16-1024'>{obj.title}</p>
                      <ul className='list__footer-sosmed'>
                        <li>
                          <a href={obj.facebook ? obj.facebook : '#!'}>
                            <img src='./../images/Icon - Facebook.png' alt='' />
                          </a>
                        </li>
                        <li>
                          <a href={obj.instagram ? obj.instagram : '#!'}>
                            <img src='./../images/Icon - Ig.png' alt='' />
                          </a>
                        </li>
                        <li>
                          <a href={obj.whatsapp ? obj.whatsapp : '#!'}>
                            <img src='./../images/Icon - Wa.png' alt='' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='text-center d-md-none'>
              <NavLink
                to='/our-agenct'
                className='semi-bold font__size--14 btn btn__outlined--darkblue color__darkblue no__opacity'>
                Load More
              </NavLink>
            </div>
          </div>
        </section>

        <section className='pb-0'>
          <div className='container'>
            <div className='d-md-flex text-center text-md-left justify-content-between align-items-center mb-4'>
              <h4 className='normal font__size--48  text__48-1024 text__48-md text__48-sm text__48-xxs cardo mb-0'>
                Featured Properties
              </h4>
              <NavLink
                to='/shop'
                className='normal font__size--14 text__14-1024 color__black d-none d-md-block'>
                See All
              </NavLink>
            </div>

            <div className='row mb-4'>
              {product.map((obj) => {
                return (
                  <div className='col-md-6 col-lg-4 mb-4 mb-lg-0'>
                    <CardProductList obj={obj} />
                  </div>
                );
              })}
            </div>

            <div className='text d-md-none'>
              <NavLink to='/shop' className='normal font__size--14 text__14-1024 color__black'>
                See All
              </NavLink>
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

export default AboutUs;

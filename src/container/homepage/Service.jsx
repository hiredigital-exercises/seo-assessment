import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Service = (props) => {
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
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'What We Do'} subtitle={'Service'} />

        <section className='pb-0'>
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
                      className='wrapper__service-card d-inline-block w-100 text-center'>
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
            <CardBanner />
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Service;

import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Portofolio = (props) => {
  const [portofolio, setPortofolio] = useState([
    './../images/product/Image.jpg',
    './../images/product/Image-1.jpg',
    './../images/product/Image-2.jpg',
    './../images/product/Image-3.jpg',
    './../images/product/Image-4.jpg',
    './../images/product/Image-5.jpg',
    './../images/product/Image-6.jpg',
    './../images/product/Image-7.jpg',
    './../images/product/Image-8.jpg',
    './../images/product/Image-9.jpg',
    './../images/product/Image-10.jpg',
    './../images/product/Image-11.jpg',
  ]);
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Our Portofolio'} subtitle={'Portofolio'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              {portofolio.map((obj) => {
                return (
                  <div className='col-sm-6 col-md-4 mb-4'>
                    <NavLink to='/portofolio/detail'>
                      <img src={obj} className='wrapper__images-property' alt='' />
                    </NavLink>
                  </div>
                );
              })}
            </div>

            <div className='text-center mt-4'>
              <a
                href='#!'
                className='semi-bold font__size--14 text__14-1024 btn btn__outlined--darkblue color__darkblue no__opacity'>
                Load More
              </a>
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

export default Portofolio;

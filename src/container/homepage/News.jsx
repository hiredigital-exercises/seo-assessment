import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import CardNews from '../../component/Card/CardNews';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import Pagination from '../../component/Other/Pagination';

const News = (props) => {
  const data = [
    {
      tag: 'Business',
      img: './../images/News/Bg.png',
      title: 'Amet minim mollit non deserunt ullamco est sit',
      date: '9/4/22',
      desc: 'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.',
      profile: './../images/Ellipse 1 (1).png',
      name: 'Marvin McKinney',
      link: '#!',
    },
    {
      tag: 'Business',
      img: './../images/News/Bg (2).png',
      title: 'Amet minim mollit non deserunt ullamco est sit',
      date: '9/4/22',
      desc: 'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.',
      profile: './../images/Ellipse 1 (1).png',
      name: 'Darlene Robertson',
      link: '#!',
    },
    {
      tag: 'Business',
      img: './../images/News/Bg (1).png',
      title: 'Amet minim mollit non deserunt ullamco est sit',
      date: '9/4/22',
      desc: 'Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.',
      profile: './../images/Ellipse 1 (1).png',
      name: 'Guy Hawkins',
      link: '#!',
    },
  ];
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'News'} subtitle={'News'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 mb-4 mb-md-0'>
                <div className='mb-5'>
                  {data.map((obj, i) => {
                    return (
                      <div key={i} className='mb-4'>
                        {' '}
                        <CardNews obj={obj} />
                      </div>
                    );
                  })}
                </div>
                <Pagination />
              </div>
              <div className='col-md-4 col-xl-3 offset-xl-1'>
                <h5 className='normal font__size--24 text__24-1024 cardo'>Top Categories</h5>
                <hr />
                <ul className='list__category mb-5'>
                  <li>
                    <div className='d-flex align-items-center justify-content-between normal font__size--16 text__16-1024'>
                      <span>House</span>
                      <span>2,124</span>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex align-items-center justify-content-between normal font__size--16 text__16-1024'>
                      <span>Apartment</span>
                      <span>1,765</span>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex align-items-center justify-content-between normal font__size--16 text__16-1024'>
                      <span>Single Family</span>
                      <span>231</span>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex align-items-center justify-content-between normal font__size--16 text__16-1024'>
                      <span>Studio</span>
                      <span>21</span>
                    </div>
                  </li>
                </ul>

                <h5 className='normal font__size--24 text__24-1024 cardo'>Portofolio List</h5>
                <hr />
                <NavLink to='/portofolio/detail' className='mb-4 d-inline-block w-100'>
                  <img
                    src='./../images/product/Image-1.jpg'
                    className='wrapper__images-property detail'
                    alt=''
                  />
                </NavLink>
                <NavLink to='/portofolio/detail' className='mb-4 d-inline-block w-100'>
                  <img
                    src='./../images/product/Image-2.jpg'
                    className='wrapper__images-property detail'
                    alt=''
                  />
                </NavLink>
                <NavLink to='/portofolio/detail' className='mb-4 d-inline-block w-100'>
                  <img
                    src='./../images/product/Image-3.jpg'
                    className='wrapper__images-property detail'
                    alt=''
                  />
                </NavLink>
                <div className='text-center mt-4'>
                  <NavLink
                    to='/our-portofolio'
                    className='semi-bold font__size--14 text__14-1024 btn btn__outlined--darkblue color__darkblue no__opacity'
                  >
                    See All
                  </NavLink>
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

export default News;

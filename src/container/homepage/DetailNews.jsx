import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import CardListReviewNews from '../../component/Card/CardListReviewNews';

const DetailNews = (props) => {
  const [review, setReview] = useState([
    {
      name: 'Cameron Williamson',
      date: '8/2/19',
      profile: './../images/Ellipse 1.png',
      rating: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.',
    },
    {
      name: 'Marvin McKinney',
      date: '8/2/19',
      profile: './../images/Ellipse 1 (1).png',
      rating: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.',
    },
  ]);

  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Detail News'} subtitle={'Detail News'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 mb-4 mb-lg-0'>
                <div className='wrapper__head-detail position-relative'>
                  <div className='images position-relative mb-3'>
                    <div className='normal font__size--14 text__14-1024 tag'>Business</div>
                    <img src='./../images/News/Bg.png' alt='' />
                  </div>
                  <h5 className='normal font__size--24 text__24-1024 mb-3 cardo'>
                    Amet minim mollit non deserunt ullamco est sit{' '}
                  </h5>
                  <div className='mt-4'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div className='d-flex align-items-center profile'>
                        <img src='./../images/Ellipse 1 (1).png' alt='' />
                        <span className='ml-3 normal font__size--16 text__16-1024'>
                          Marvin McKinney
                        </span>
                      </div>
                      <span className='normal font__size--14 text__14-1024 ml-2'>9/4/22</span>
                    </div>
                  </div>
                </div>

                <hr className='my-4' />

                <p className='normal font__size--14 text__14-1024 lh-2 mb-3'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur
                  cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas
                  fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In
                  vestibulum pretium, potenti molestie.
                </p>
                <p className='normal font__size--14 text__14-1024 lh-2 mb-3'>
                  Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                  fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper
                  ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing
                  arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies
                  libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque
                  tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in
                  sed arcu turpis neque.
                </p>
                <p className='normal font__size--14 text__14-1024 lh-2'>
                  Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur
                  maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique
                  pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst
                  vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui
                  sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.
                </p>

                <div className='row my-4'>
                  <div className='col-md-6'>
                    <img
                      src='./../images/NewsDetail/Image (2).png'
                      className='images__detail-news'
                      alt=''
                    />
                  </div>
                  <div className='col-md-6'>
                    <img
                      src='./../images/NewsDetail/Image (3).png'
                      className='images__detail-news'
                      alt=''
                    />
                  </div>
                </div>

                <p className='normal font__size--14 text__14-1024 lh-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur
                  cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas
                  fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In
                  vestibulum pretium, potenti molestie.
                </p>
                <p className='normal font__size--14 text__14-1024 lh-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur
                  cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas
                  fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In
                  vestibulum pretium, potenti molestie.
                </p>
                <p className='normal font__size--14 text__14-1024 lh-2'>
                  Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                  fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper
                  ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing
                  arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies
                  libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque
                  tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in
                  sed arcu turpis neque.
                </p>
                <p className='normal font__size--14 text__14-1024 lh-2 mb-4'>
                  Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur
                  maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique
                  pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst
                  vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui
                  sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.
                </p>

                <div className='mb-4'>
                  <h5 className='semi-bold font__size--12 mb-3'>Social Share</h5>

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

                <h5 className='normal font__size--18 cardo mb-3'>Comments (02)</h5>

                <div className=''>
                  {review.map((obj) => {
                    return <CardListReviewNews data={obj} />;
                  })}
                </div>

                <div className='mt-5 wrapper__form-contact mb-5'>
                  <h4 className='normal font__size--24 text__24-1024 cardo mb-4'>Post Comment</h4>

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
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-xl-3 offset-xl-1'>
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

                <h5 className='normal font__size--24 text__24-1024 cardo mt-5'>Portofolio List</h5>
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
                    className='semi-bold font__size--14 text__14-1024 btn btn__outlined--darkblue color__darkblue no__opacity'>
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

export default DetailNews;

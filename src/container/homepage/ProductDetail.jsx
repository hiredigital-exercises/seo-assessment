import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import ListCheckedDetail from '../../component/List/ListCheckedDetail';
import CardListReview from '../../component/Card/CardListReview';
import RatingForm from 'react-rating';
import CardProductList from '../../component/Card/CardProductList';

const ProductDetail = (props) => {
  const data = [
    {
      name: 'Air Conditioner',
      status: true,
    },
    {
      name: 'Gym',
      status: true,
    },
    {
      name: 'Microwave',
      status: true,
    },
    {
      name: 'Swimming Pool',
      status: true,
    },
    {
      name: 'Wifi',
      status: true,
    },
  ];

  const [review, setReview] = useState([
    {
      name: 'Cameron Williamson',
      date: '8/2/19',
      profile: './../images/Ellipse 1.png',
      rating: 5,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.',
      images: [],
    },
    {
      name: 'Marvin McKinney',
      date: '8/2/19',
      profile: './../images/Ellipse 1 (1).png',
      rating: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A justo turpis massa tristique augue dignissim volutpat. Quis ultricies eu libero tortor dictumst.',
      images: ['./../images/Image44.png', './../images/Image45.png', './../images/Image46.png'],
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
  ]);
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Product Detail'} subtitle={'Product Detail'} />

        <section className='pb-0'>
          <div className='container'>
            <img src='./../images/Bg.png' className='images__detailProduct mb-4' alt='' />

            <div className='row'>
              <div className='col-lg-8 mb-4 mb-lg-0'>
                <div className='wrapper__desc-product mb-4'>
                  <div className='normal font__size--16 text__16-1024 mb-3 status sale'>
                    For Sale
                  </div>
                  <h5 className='normal font__size--38 text__38-1024 cardo mb-3'>
                    Warm and Cozy Apartment
                  </h5>
                  <div className='d-flex align-items-center normal font__size--14 text__14-1024 color__gray-2'>
                    <img src='./../images/location (3) 1.png' className='mr-2' alt='' />
                    Belia Gargen, California
                  </div>
                </div>

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Descriptions</h5>
                <p className='normal font__size--14 text__14-1024 mb-3'>
                  Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                  fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper
                  ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing
                  arcu, consectetur lacus eu. Non, augue integer augue accumsan ante. Ultricies
                  libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque
                  tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in
                  sed arcu turpis neque.
                </p>

                <p className='normal font__size--14 text__14-1024 mb-5'>
                  Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur
                  maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique
                  pretium. Congue ac et neque vulputate et morbi gravida. Ut semper odio dictumst
                  vel nibh urna. Cras blandit cursus nam nulla. Montes, bibendum mauris dui
                  sollicitudin est purus, hendrerit. Convallis in nunc a, commodo euismod.
                </p>

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Property Detail</h5>

                <div className='d-flex flex-wrap flex-md-nowrap align-items-center mb-5'>
                  <div className='mr-4 mr-md-5 mb-3 mb-md-0'>
                    <h5 className='normal font__size--12 mb-1'>Property ID</h5>
                    <p className='semi-bold font__size--12 mb-0'>G123FD</p>
                  </div>
                  <div className='mr-4 mr-md-5 mb-3 mb-md-0'>
                    <h5 className='normal font__size--12 mb-1'>Home Area</h5>
                    <p className='semi-bold font__size--12 mb-0'>120sqft</p>
                  </div>
                  <div className='mr-4 mr-md-5 mb-3 mb-md-0'>
                    <h5 className='normal font__size--12 mb-1'>Rooms</h5>
                    <p className='semi-bold font__size--12 mb-0'>8</p>
                  </div>
                  <div className='mr-4 mr-md-5 mb-3 mb-md-0'>
                    <h5 className='normal font__size--12 mb-1'>Baths</h5>
                    <p className='semi-bold font__size--12 mb-0'>4</p>
                  </div>
                  <div className=''>
                    <h5 className='normal font__size--12 mb-1'>Year Build</h5>
                    <p className='semi-bold font__size--12 mb-0'>2002</p>
                  </div>
                </div>

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Gallery</h5>

                <div className='row mb-5'>
                  <div className='col-md-6 mb-4'>
                    <img
                      src='./../images/DetailProduct/Image (2).png'
                      className='images__detail-product'
                      alt=''
                    />
                  </div>
                  <div className='col-md-6 mb-4'>
                    <img
                      src='./../images/DetailProduct/sfgdsgfdsg.png'
                      className='images__detail-product'
                      alt=''
                    />
                  </div>
                  <div className='col-md mb-4'>
                    <img
                      src='./../images/DetailProduct/Image (3).png'
                      className='images__detail-product'
                      alt=''
                    />
                  </div>
                  <div className='col-md-3 mb-4'>
                    <img
                      src='./../images/DetailProduct/Image (4).png'
                      className='images__detail-product'
                      alt=''
                    />
                  </div>
                  <div className='col-md mb-4'>
                    <img
                      src='./../images/DetailProduct/Image (5).png'
                      className='images__detail-product'
                      alt=''
                    />
                  </div>
                </div>

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Amenities</h5>
                <div className='row mb-5'>
                  <div className='col-md-4'>
                    <ListCheckedDetail list={data} />
                  </div>
                  <div className='col-md-4'>
                    <ListCheckedDetail list={data} />
                  </div>
                  <div className='col-md-4'>
                    <ListCheckedDetail list={data} />
                  </div>
                </div>

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Location</h5>
                <img src='./../images/Basemap image.png' className='mb-5' alt='' />

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Customers Review</h5>

                <div className='mt-5'>
                  {review.map((obj, i) => {
                    return <CardListReview key={i} data={obj} />;
                  })}
                </div>

                <div className='mt-5 wrapper__form-contact mb-5'>
                  <h4 className='normal font__size--24 text__24-1024 cardo mb-4'>Add a Review</h4>

                  <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>Your Ratings</h5>

                  <div className='mb-4'>
                    <RatingForm
                      placeholderRating={0}
                      emptySymbol={
                        <img
                          src='./../images/Icon - Star.png'
                          className='icon'
                          style={{
                            width: '26px',
                            height: '26px',
                            marginRight: '10px',
                          }}
                        />
                      }
                      placeholderSymbol={
                        <img
                          src='./../images/star-red.png'
                          className='icon'
                          style={{
                            width: '26px',
                            height: '26px',
                            marginRight: '10px',
                          }}
                        />
                      }
                      fullSymbol={
                        <img
                          src='./../images/star-yellow.png'
                          className='icon'
                          style={{
                            width: '26px',
                            height: '26px',
                            marginRight: '10px',
                          }}
                        />
                      }
                    />
                  </div>
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
                      placeholder='Enter Message'
                    ></textarea>
                  </div>
                  <div className='mb-3'>
                    <div className='wrapper__field-checkbox'>
                      <input type='checkbox' id='checkbox1' name='checkbox1' value='Bike' />
                      <label htmlFor='checkbox1' className='check flex-shrink-0 mt-1 mr-2'></label>
                      <label
                        htmlFor='checkbox1'
                        className='normal font__size--12 text__16-md color__gray-2'
                      >
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

                <h5 className='normal font__size--18 text__18-1024 cardo mb-3'>
                  Relate Properties
                </h5>
                <div className='row mb-4'>
                  {product.map((obj, i) => {
                    return (
                      <div key={i} className='col-md-6 mb-4'>
                        <CardProductList obj={obj} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='col-lg-3 offset-lg-1'>
                <h5 className='normal font__size--24 text__24-1024 cardo mt-5'>Top Categories</h5>
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

export default ProductDetail;

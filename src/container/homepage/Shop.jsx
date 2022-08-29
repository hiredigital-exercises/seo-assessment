import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import CardProductList from '../../component/Card/CardProductList';
import Footer from '../../component/Footer/Footer';
import ListCheck from '../../component/List/ListCheck';
import Navbar from '../../component/Navbar/Navbar';
import Pagination from '../../component/Other/Pagination';

const Shop = (props) => {
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

  const type = [
    {
      name: 'House',
      count: 2124,
    },
    {
      name: 'Apartment',
      count: 1765,
    },
    {
      name: 'Single Family',
      count: 231,
    },
    {
      name: 'Studio',
      count: 21,
    },
  ];

  const amenities = [
    {
      name: 'Dishwasger',
      count: 2124,
    },
    {
      name: 'Floor Coverings',
      count: 1765,
    },
    {
      name: 'Internet',
      count: 231,
    },
    {
      name: 'Build Wardrobes',
      count: 21,
    },
    {
      name: 'Supermarket',
      count: 231,
    },
    {
      name: 'Kids Zone',
      count: 21,
    },
  ];

  const price = [
    {
      name: 'Low Budget',
      count: '$5,000 - $10,000',
    },
    {
      name: 'Medium',
      count: '$10,000 - $50,000',
    },
    {
      name: 'High Budget',
      count: '$50,000 Up',
    },
  ];

  const bed = [
    {
      name: 'Single',
      count: 2124,
    },
    {
      name: 'Double',
      count: 1765,
    },
    {
      name: 'Up to 3',
      count: 231,
    },
    {
      name: 'Up to 5',
      count: 21,
    },
  ];

  const category = [
    {
      name: 'Buying',
      count: 2124,
    },
    {
      name: 'Renting',
      count: 1765,
    },
    {
      name: 'Selling',
      count: 231,
    },
  ];
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Shop'} subtitle={'Shop'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 mb-4 mb-lg-0'>
                <div className='row mb-4'>
                  {product.map((obj) => {
                    return (
                      <div className='col-md-6 mb-4'>
                        <CardProductList obj={obj} />
                      </div>
                    );
                  })}
                </div>

                <Pagination />
              </div>
              <div className='col-lg-4'>
                <div className='mb-5'>
                  <h5 className='normal font__size--24 text__24-1024 cardo'>Property Type</h5>
                  <hr />
                  <ListCheck list={type} />
                </div>
                <div className='mb-5'>
                  <h5 className='normal font__size--24 text__24-1024 cardo'>Amenities</h5>
                  <hr />
                  <ListCheck list={amenities} />
                </div>
                <div className='mb-5'>
                  <h5 className='normal font__size--24 text__24-1024 cardo'>Price Range</h5>
                  <hr />
                  <ListCheck list={price} />
                </div>
                <div className='mb-5'>
                  <h5 className='normal font__size--24 text__24-1024 cardo'>Bed/Bath</h5>
                  <hr />
                  <ListCheck list={bed} />
                </div>
                <div className='mb-5'>
                  <h5 className='normal font__size--24 text__24-1024 cardo'>Category</h5>
                  <hr />
                  <ListCheck list={category} />
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

export default Shop;

import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Wishlist = (props) => {
  const [wishlist, setWishlist] = useState([
    {
      img: './../images/wishlist/Image.png',
      name: 'Cozy & Tiny House',
      price: '432,00',
    },
    {
      img: './../images/wishlist/Image (1).png',
      name: 'Cozy & Tiny House',
      price: '432,00',
    },
    {
      img: './../images/wishlist/Image (2).png',
      name: 'Cozy & Tiny House',
      price: '432,00',
    },
  ]);
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Wishlist'} subtitle={'Wishlist'} />

        <section className='pb-0'>
          <div className='container'>
            {wishlist.map((obj, i) => {
              return (
                <div key={i} className='wrapper__card-wishlist wish position-relative mb-4'>
                  <div className='flex__group d-flex justify-content-between align-items-center'>
                    <div className='item d-flex align-items-center'>
                      <img src={obj.img} className='img' alt='' />
                      <div className='ml-4'>
                        <h5 className='normal font__size--24 text__24-1024 cardo mb-3 mb-md-0'>
                          {obj.name}
                        </h5>
                        <div className='d-flex d-md-none align-items-center justify-content-between'>
                          <h5 className='mb-0 font__size--16 text__16-1024 semi-bold'>
                            ${obj.price}
                          </h5>

                          <div className='stock in normal font__size--14 text__14-1024'>
                            In Stock
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 className='mb-0 font__size--16 text__16-1024 semi-bold d-none d-md-block'>
                      ${obj.price}
                    </h5>

                    <div className='stock in normal font__size--14 text__14-1024 d-none d-md-block'>
                      In Stock
                    </div>

                    <div className='pointer cart mt-4 mt-md-0'>Add to Cart</div>
                    <img src='./../images/Icon - Close.png' className='pointer remove' alt='' />
                  </div>
                </div>
              );
            })}
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

export default Wishlist;

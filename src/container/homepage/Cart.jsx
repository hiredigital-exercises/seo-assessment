import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import ListProductCart from '../../component/Card/ListProductCart';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Cart = (props) => {
  const [cart, setCart] = useState([
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

        <CardHead title={'My Cart'} subtitle={'My Cart'} />

        <section className='pb-0'>
          <div className='container'>
            {cart.map((obj) => {
              return <ListProductCart data={obj} />;
            })}

            <div className='row'>
              <div className='col-lg-10 col-xl-7 offset-lg-2 offset-xl-5'>
                <div className='row'>
                  <div className='col-lg-3 normal font__size--24 text__24-1024 cardo mb-4 mb-lg-0'>
                    Cart Totals
                  </div>
                  <div className='col-lg offset-lg-1'>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 medium font__size--14 text__14-1024'>Cart Subtotal</h5>
                      <h5 className='mb-0 medium font__size--14 text__14-1024'>$1296,00</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 medium font__size--14 text__14-1024'>
                        Shipping and Handing
                      </h5>
                      <h5 className='mb-0 medium font__size--14 text__14-1024'>$4,00</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 medium font__size--14 text__14-1024'>Vat</h5>
                      <h5 className='mb-0 medium font__size--14 text__14-1024'>$0,00</h5>
                    </div>
                    <div className='d-flex align-items-center justify-content-between mb-4'>
                      <h5 className='mb-0 extra-bold font__size--14 text__14-1024'>Order Total</h5>
                      <h5 className='mb-0 extra-bold font__size--14 text__14-1024'>$1300</h5>
                    </div>
                    <NavLink
                      to='/checkout'
                      className='text-center normal font__size--14 text__14-1024 btn btn__darkblue color__white shadow w-100 rounded-0'>
                      Proceed to Checkout
                    </NavLink>
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

export default Cart;

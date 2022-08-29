import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Map = (props) => {
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Google Map Locations'} subtitle={'Google Map Locations'} />

        <section className='pb-0 pt-0'>
          <img src='./../images/Basemap image.png' className='w-100 images__map' alt='' />
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

export default Map;

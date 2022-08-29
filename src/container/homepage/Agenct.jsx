import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Agenct = (props) => {
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
    {
      img: './../images/agent/Image-1.jpg',
      name: 'Cameron Williamson',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
    {
      img: './../images/agent/Image-3.jpg',
      name: 'Brooklyn Simmons',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
    {
      img: './../images/agent/Image-5.jpg',
      name: 'Robert Fox',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
    {
      img: './../images/agent/Image-7.jpg',
      name: 'Guy Hawkins',
      title: 'Real Estate Broker',
      facebook: '#!',
      instagram: '#!',
      whatsapp: '#!',
    },
  ]);
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Our Agent'} subtitle={'Our Agent'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row'>
              {agenct.map((obj) => {
                return (
                  <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
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

export default Agenct;

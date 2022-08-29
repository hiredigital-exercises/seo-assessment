import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardProductList from '../../component/Card/CardProductList';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Index = (props) => {
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
  ]);

  const [list, setList] = useState([
    {
      img: './../images/Activity.png',
      title: 'Property Management',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/sdsf.png',
      title: 'Home Buying',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Calling.png',
      title: 'Consulting Service',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Chart.png',
      title: 'Mortgage Service',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Discount.png',
      title: 'Home Selling',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
    {
      img: './../images/Graph.png',
      title: 'Escrow Service',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus.',
    },
  ]);

  const [portofolio, setPortofolio] = useState([
    './../images/product/Image.jpg',
    './../images/product/Image-1.jpg',
    './../images/product/Image-2.jpg',
    './../images/product/Image-3.jpg',
    './../images/product/Image-4.jpg',
    './../images/product/Image-5.jpg',
  ]);

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
  ]);

  const [accordion, setAccordion] = useState([
    {
      title: 'How to buy a product?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How can I make refund from your website?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How to buy a product?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How can I make refund from your website?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How can I make refund from your website?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How can I make refund from your website?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How can I make refund from your website?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
    {
      title: 'How can I make refund from your website?',
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Id a enim, consectetur cursus. At mattis nulla in pretium.
      Condimentum sagittis mauris augue maecenas fusce commodo
      neque purus et. Integer eu amet at pretium id ultrices
      faucibus. In vestibulum pretium, potenti molestie.`,
    },
  ]);

  const [active, setActive] = useState(0);

  const onclickActive = (e) => {
    if (e == active) {
      setActive(0);
    } else {
      setActive(e);
    }
  };

  return (
    <Fragment>
      <div className='overflow-hidden'>
        <div className='bg__darkblue'>
          <Navbar status='light' />

          <section>
            <div className='container position-relative'>
              <img src='./../images/Image (2).png' className='path__3 d-none d-lg-block' alt='' />
              <div className='row position-relative z-2'>
                <div className='col-lg-5 text-center text-lg-left'>
                  <h1 className='normal font__size--56 text__50-1024 text__50-sm color__white cardo mb-0'>
                    Easy way to find your{' '}
                    <span className='position-relative'>
                      Dream Place
                      <img src='./../images/Elementsd.png' className='path__2' alt='' />
                    </span>
                  </h1>
                  <p className='normal font__size--14 text__14-1024 color__white lh-2 my-4'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                    officia consequat duis enim velit mollit. Exercitation veni.
                  </p>
                  <NavLink
                    to='/checkout'
                    className='semi-bold font__size--14 text__14-1024 color__white btn btn__brown shadow rounded-0'
                  >
                    Make an Inquiry
                  </NavLink>

                  <hr className='my-5 line__hr' />

                  <div className='row'>
                    <div className='col-sm-4 mb-4 mb-ms-0'>
                      <h5 className='color__white bold font__size--28 text__28-1024'>1500+</h5>
                      <p className='normal font__size--12 color__white mb-0'>Premium Products</p>
                    </div>
                    <div className='col-sm-4 mb-4 mb-ms-0'>
                      <h5 className='color__white bold font__size--28 text__28-1024'>324k+</h5>
                      <p className='normal font__size--12 color__white mb-0'>Happy Customers</p>
                    </div>
                    <div className='col-sm-4 mb-4 mb-ms-0'>
                      <h5 className='color__white bold font__size--28 text__28-1024'>1200+</h5>
                      <p className='normal font__size--12 color__white mb-0'>Award Winning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 col-xl-4 mb-4 mb-md-0'>
                <img src='./../images/Image (1).png' className='w-100' alt='' />
              </div>
              <div className='col-md-7 offset-xl-1'>
                <h4 className='normal font__size--48 text__48-1024 text__48-md cardo mb-4'>
                  We are your partner in creating a legacy building facade.
                </h4>

                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                  fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper
                  ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing
                  arcu, consectetur lacus eu.
                </p>
                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim
                  sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra,
                  nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.
                </p>
                <p className='normal font__size--14 text__14-1024 mb-4'>
                  Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur
                  maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique
                  pretium. Congue ac et neque vulputate et morbi gravida.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='d-md-flex justify-content-between align-items-center mb-4'>
              <h4 className='normal font__size--48 text__48-1024 text__48-md cardo mb-0'>
                Featured Properties
              </h4>
              <a
                href='#!'
                className='normal font__size--14 text__14-1024 color__black d-none d-md-block'
              >
                See All
              </a>
            </div>

            <div className='row mb-4'>
              {product.map((obj, i) => {
                return (
                  <div key={i} className='col-md-6 mb-4 mb-lg-0 col-lg-4'>
                    <CardProductList obj={obj} />
                  </div>
                );
              })}
            </div>

            <div className='text-center d-md-none'>
              <a href='#!' className='normal font__size--14 text__14-1024 color__black'>
                See All
              </a>
            </div>
          </div>
        </section>

        <section className='bg__gray-3'>
          <div className='container'>
            <div className='text-center'>
              <h4 className='normal font__size--48 text__48-1024 text__48-md cardo'>
                Your dream house is no longer a dream.
              </h4>
              <p className='normal font__size--14 text__14-1024 lh-2 color__gray-2'>
                Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae
                fringilla tempor. Non in in sodales suspendisse <br className='d-none d-lg-block' />
                egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum
                tortor mi, at.
              </p>
            </div>
          </div>

          <div className='position-relative wrapper__play-video mt-5'>
            <img src='./../images/Button.png' className='pointer path__play' alt='' />
            <img src='./../images/dfsdfs.png' className='cover' alt='' />
          </div>
        </section>

        <section>
          <div className='container'>
            <h4 className='normal font__size--48 text__48-1024 text__48-md cardo text-center mb-5'>
              Our Service
            </h4>
            <div className='row'>
              {list.map((obj, i) => {
                return (
                  <div key={i} className='col-sm-6 col-lg-4 mb-4'>
                    <NavLink
                      to='/service-detail'
                      className='wrapper__service-card d-inline-block w-100 text-center'
                    >
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
            <h4 className='normal font__size--48 text__48-1024 text__48-md cardo text-center mb-5'>
              Our Portofolio
            </h4>
            <div className='row'>
              {portofolio.map((obj, i) => {
                return (
                  <div key={i} className='col-sm-6 col-md-4 mb-4'>
                    <NavLink to='/portofolio/detail'>
                      <img src={obj} className='wrapper__images-property' alt='' />
                    </NavLink>
                  </div>
                );
              })}
            </div>

            <div className='text-center mt-4'>
              <NavLink
                to='/our-portofolio'
                className='semi-bold font__size--14 text__14-1024 btn btn__outlined--darkblue color__darkblue no__opacity'
              >
                See All
              </NavLink>
            </div>
          </div>
        </section>

        <section className='bg__gray-3'>
          <div className='container'>
            <div className='d-md-flex text-center text-md-left justify-content-between align-items-center mb-4'>
              <h4 className='normal font__size--48  text__48-1024 text__48-md text__48-sm text__48-xxs cardo mb-0'>
                Our Agent
              </h4>
              <NavLink
                to='/our-agenct'
                className='normal font__size--14 text__14-1024 color__black d-none d-md-block'
              >
                See All
              </NavLink>
            </div>
            <div className='row mb-4'>
              {agenct.map((obj, i) => {
                return (
                  <div key={i} className='col-sm-6 col-lg-3 mb-4'>
                    <div className='text-center'>
                      <img src={obj.img} className='mb-3 wrapper__images-agent' alt='' />
                      <NavLink
                        to='/agenct-detail'
                        className='semi-bold color__black font__size--18 text__18-1024'
                      >
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

            <div className='text-center d-md-none'>
              <NavLink
                to='/our-agenct'
                className='semi-bold font__size--14 btn btn__outlined--darkblue color__darkblue no__opacity'
              >
                Load More
              </NavLink>
            </div>
          </div>
        </section>

        <section>
          <div className='container'>
            <h4 className='normal font__size--48 text__48-1024 text__48-md cardo text-center mb-5'>
              Frequently Asked Questions
            </h4>
            <div className='row justify-content-center'>
              <div className='col-md-10 col-lg-6'>
                {accordion.map((obj, i) => {
                  return (
                    <div className='wrapper__accordion'>
                      <div
                        className={'head pointer ' + (active == i + 1 ? 'active' : '')}
                        onClick={() => onclickActive(i + 1)}
                      >
                        <div className='d-flex align-items-center justify-content-between'>
                          <h5 className='mb-0 mr-2 title normal cardo font__size--24 text__24-1024'>
                            {obj.title}
                          </h5>
                          <div className='icon position-relative'>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                      </div>
                      <div className='desc'>
                        <p className='normal font__size--14 text__14-1024 mb-0'>{obj.desc}</p>
                      </div>
                    </div>
                  );
                })}
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

export default Index;

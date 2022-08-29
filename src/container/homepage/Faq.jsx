import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Faq = (props) => {
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
        <Navbar />

        <CardHead title={'Frequently Asked Questions'} subtitle={'FAQ'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10 col-lg-6'>
                {accordion.map((obj, i) => {
                  return (
                    <div className='wrapper__accordion'>
                      <div
                        className={'head pointer ' + (active == i + 1 ? 'active' : '')}
                        onClick={() => onclickActive(i + 1)}>
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

export default Faq;

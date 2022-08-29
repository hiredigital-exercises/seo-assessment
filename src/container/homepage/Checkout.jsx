import React, { useState, Fragment, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import CardBanner from '../../component/Card/CardBanner';
import CardHead from '../../component/Card/CardHead';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Checkout = (props) => {
  const [activeCs, setActiveCs] = useState(true);

  const onclickActiveCs = (e) => {
    if (e == activeCs) {
      setActiveCs(0);
    } else {
      setActiveCs(e);
    }
  };

  const [active, setActive] = useState(true);

  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <CardHead title={'Checkout'} subtitle={'Checkout'} />

        <section className='pb-0'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-10 col-lg-8 col-xl-6'>
                <div className='wrapper__accordion-checkout mb-4'>
                  <div
                    // onClick={() => onclickActiveCs(!activeCs)}
                    className={'head ' + (activeCs ? 'active' : '')}>
                    <h5 className='mb-0'>
                      <span className='cardo normal font__size--18 text__18-1024'>
                        Returning customer?
                      </span>{' '}
                      <a href='#!' className='color__brown medium font__size--14 text__14-1024'>
                        Click here to login
                      </a>
                    </h5>
                  </div>

                  <div className='desc'>
                    <h5 className='cardo normal font__size--18 text__18-1024 mb-3'>
                      Please insert your account
                    </h5>

                    <div className='row mb-3'>
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

                    <div className='d-flex align-items-center mb-3'>
                      <button className='normal font__size--14 text__14-1024 btn btn__darkblue rounded-0 color__white shadow mr-3'>
                        Login
                      </button>
                      <div className='wrapper__field-checkbox'>
                        <input type='checkbox' id='checkbox1' name='checkbox1' value='Bike' />
                        <label
                          htmlFor='checkbox1'
                          className='check flex-shrink-0 mt-1 mr-2'></label>
                        <label htmlFor='checkbox1' className='normal font__size--12 color__gray-2'>
                          Remember Me
                        </label>
                      </div>
                    </div>

                    <a href='#!' className='font__size--14 text__14-1024 color__darkblue'>
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className='wrapper__accordion-checkout mb-4'>
                  <div
                    // onClick={() => onclickActiveCs(!activeCs)}
                    className={'head ' + (activeCs ? 'active' : '')}>
                    <h5 className='mb-0'>
                      <span className='cardo normal font__size--18 text__18-1024'>
                        Have a coupon?
                      </span>{' '}
                      <a href='#!' className='color__brown medium font__size--14 text__14-1024'>
                        Click here to enter your code
                      </a>
                    </h5>
                  </div>

                  <div className='desc'>
                    <h5 className='cardo normal font__size--18 text__18-1024 mb-3'>
                      If you have a coupon, please apply it below
                    </h5>

                    <div className='row mb-2'>
                      <div className='col-md-6'>
                        <div className='form-group wrapper__input-form'>
                          <input
                            type='text'
                            className='form-control normal font__size--14 text__14-1024 color__black'
                            placeholder='Coupon Code'
                          />
                        </div>
                      </div>
                    </div>

                    <button className='normal font__size--14 text__14-1024 btn btn__darkblue rounded-0 color__white shadow '>
                      Apply Coupon
                    </button>
                  </div>
                </div>

                <div className='wrapper__form-contact'>
                  <h4 className='normal font__size--24 text__24-1024 cardo mb-0'>
                    Billing Details
                  </h4>
                  <hr className='mt-2 mb-4' />

                  <h5 className='normal font__size--18 text__18-1024 cardo'>
                    Personal Information
                  </h5>
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
                          placeholder='Email'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <select className='form-control normal font__size--14 text__14-1024 color__black'>
                          <option value='' selected disabled>
                            Select Service Type
                          </option>
                          <option value=''>Service 1</option>
                          <option value=''>Service 2</option>
                          <option value=''>Service 3</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Your Phone Number'
                        />
                      </div>
                    </div>
                  </div>

                  <h5 className='normal font__size--18 text__18-1024 cardo mt-4'>County</h5>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <select className='form-control normal font__size--14 text__14-1024 color__black'>
                          <option value='' selected disabled>
                            Select Country
                          </option>
                          <option value=''>Country 1</option>
                          <option value=''>Country 2</option>
                          <option value=''>Country 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <h5 className='normal font__size--18 text__18-1024 cardo mt-4'>
                    Personal Information
                  </h5>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='House Number and Street Name'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Apertment, Suit, Unit, Etc'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Town/City'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='State'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group wrapper__input-form'>
                        <input
                          type='text'
                          className='form-control normal font__size--14 text__14-1024 color__black'
                          placeholder='Zip'
                        />
                      </div>
                    </div>
                  </div>

                  <h5 className='normal font__size--18 text__18-1024 cardo mt-4'>
                    Order Notes (Optional)
                  </h5>
                  <div className='form-group wrapper__input-form'>
                    <textarea
                      name=''
                      id=''
                      className='form-control normal font__size--14 text__14-1024 color__black'
                      cols='30'
                      rows='7'
                      placeholder='Notes about your order'></textarea>
                  </div>
                </div>

                <div className='mt-4'>
                  <div className='row'>
                    <div className='col-md-6 mb-4 mb-md-0'>
                      <div className='wrapper__form-contact'>
                        <h5 className='normal font__size--24 text__24-1024 cardo'>
                          Payment Method
                        </h5>
                        <hr />
                        <div className='wrapper__field-checkbox payment'>
                          <input type='radio' id='onCheckPayment' name='payment' />
                          <label
                            htmlFor='onCheckPayment'
                            className='check flex-shrink-0 mr-2'></label>
                          <label
                            htmlFor='onCheckPayment'
                            className='normal font__size--18 text__18-1024 cardo color__gray-2'>
                            Check Payment
                          </label>
                        </div>
                        <hr />
                        <div className='wrapper__field-checkbox payment'>
                          <input type='radio' id='onCashDelivery' name='payment' />
                          <label
                            htmlFor='onCashDelivery'
                            className='check flex-shrink-0 mr-2'></label>
                          <label
                            htmlFor='onCashDelivery'
                            className='normal font__size--18 text__18-1024 cardo color__gray-2'>
                            Cash on Delivery
                          </label>
                        </div>
                        <hr />
                        <div className='wrapper__field-checkbox payment'>
                          <input type='radio' id='onPaypal' name='payment' />
                          <label htmlFor='onPaypal' className='check flex-shrink-0 mr-2'></label>
                          <label
                            htmlFor='onPaypal'
                            className='normal font__size--18 text__18-1024 cardo color__gray-2'>
                            Paypal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='wrapper__form-contact'>
                        <h5 className='normal font__size--24 text__24-1024 cardo'>Cart Totals</h5>
                        <hr />
                        <div className='d-flex align-items-center justify-content-between mb-3'>
                          <span className='medium font__size--14 text__14-1024'>Cart Subtotal</span>
                          <span className='medium font__size--14 text__14-1024'>$1296,00</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mb-3'>
                          <span className='medium font__size--14 text__14-1024'>
                            Shipping and Handing
                          </span>
                          <span className='medium font__size--14 text__14-1024'>$4,00</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mb-3'>
                          <span className='medium font__size--14 text__14-1024'>Vat</span>
                          <span className='medium font__size--14 text__14-1024'>$0,00</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                          <span className='extra-bold font__size--14 text__14-1024'>
                            Order Total
                          </span>
                          <span className='extra-bold font__size--14 text__14-1024'>$1300</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='text-center mt-4'>
                  <p className='normal font__size--12 mb-4'>
                    Your personal data will be used to process your order, support your experience{' '}
                    <br className='d-none d-md-block' /> throughout this website, and for other
                    purposes described in our privacy policy.
                  </p>

                  <button className='semi-bold font__size--14 text__14-1024 color__white btn btn__darkblue shadow rounded-0 '>
                    Place Order
                  </button>
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

export default Checkout;

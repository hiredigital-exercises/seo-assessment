import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CardBanner from '../../component/Card/CardBanner';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const Login = (props) => {
  return (
    <Fragment>
      <div className='overflow-hidden'>
        <Navbar />

        <section className='bg__gray-1'>
          <div className='container'>
            <h5 className='font__size--48 text__48-1024 text__48-md text__48-sm text__48-xxs cardo normal'>
              Sign In
            </h5>
            <p className='normal font__size--16 text__16-1024 mb-0'>
              <span className='color__gray-2'>Home /</span> Sign In
            </p>
          </div>
        </section>

        <section>
          <div className='container'>
            <div className='text-center mb-4'>
              <h5 className='font__size--48 text__48-1024 text__48-md text__48-sm text__48-xxs cardo normal'>
                Sign In to your account
              </h5>
              <p className='normal font__size--14 text__14-1024 color__gray-2'>
                Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint.{' '}
              </p>
            </div>

            <div className='row justify-content-center'>
              <div className='col-md-4'>
                <div className='form-group wrapper__input-form'>
                  <input
                    type='email'
                    className='form-control normal font__size--14 text__14-1024 color__black'
                    placeholder='Email or Username'
                  />
                </div>
                <div className='form-group wrapper__input-form'>
                  <input
                    type='password'
                    className='form-control normal font__size--14 text__14-1024 color__black'
                    placeholder='Password'
                  />
                </div>
                <div className='text-right mb-3'>
                  <a href='#!' className='font__size--14 text__14-1024 color__darkblue'>
                    Forgot Password?
                  </a>
                </div>

                <NavLink
                  to='/'
                  className='semi-bold font__size--14 text__14-1024 color__white btn btn__darkblue shadow rounded-0 w-100 mb-3'>
                  Login
                </NavLink>

                <div className='text-center noraml font__size--14 text__14-1024 color__gray-2'>
                  Dont have an account?{' '}
                  <a href='#!' className='color__darkblue'>
                    Create Account
                  </a>
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

export default Login;

import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <Fragment>
      <nav
        className='navbar navbar-expand-lg wrapper__navbar position-relative z-2'
        data-aos='fade-down'
        data-aos-duration='1000'
        data-aos-delay='300'
      >
        <div className='container position-relative'>
          <NavLink
            to='/'
            exact
            className={
              'navbar-brand cardo font__size--24 text__24-1024 text__24-sm ' +
              (props.status ? 'color__white' : 'color__black')
            }
          >
            Home<span className='color__brown'>Q</span>
          </NavLink>

          <NavLink
            to='/my-cart'
            className='font__size--14 text__14-1024 color__black ml-auto mr-4 d-lg-none'
          >
            <div className={'wrapper__cart ' + (props.status ? 'light' : '')}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M7.54437 19.9518C8.25837 19.9518 8.83937 20.5318 8.83937 21.2458C8.83937 21.9598 8.25837 22.5408 7.54437 22.5408C6.83037 22.5408 6.25037 21.9598 6.25037 21.2458C6.25037 20.5318 6.83037 19.9518 7.54437 19.9518ZM18.8247 19.9518C19.5397 19.9518 20.1207 20.5318 20.1207 21.2458C20.1207 21.9598 19.5397 22.5408 18.8247 22.5408C18.1107 22.5408 17.5307 21.9598 17.5307 21.2458C17.5307 20.5318 18.1107 19.9518 18.8247 19.9518ZM3.26857 3.00943L5.34857 3.36943C5.68357 3.42843 5.93857 3.70643 5.96757 4.04643L6.20257 6.84743L7.07642 6.8478C7.21902 6.84787 7.3601 6.84793 7.49969 6.84799L9.10399 6.84876C9.23187 6.84882 9.35833 6.84888 9.48336 6.84895L11.2548 6.84992C11.366 6.84998 11.476 6.85005 11.5846 6.85012L12.826 6.85091C12.9243 6.85097 13.0214 6.85104 13.1172 6.85111L14.209 6.85191C14.2952 6.85198 14.3803 6.85205 14.4641 6.85211L15.4161 6.85293C15.491 6.853 15.5647 6.85307 15.6374 6.85314L16.2631 6.85376C16.3295 6.85383 16.3949 6.8539 16.4592 6.85397L17.1838 6.85481C17.2403 6.85488 17.2958 6.85495 17.3505 6.85502L17.9622 6.85588C18.0097 6.85595 18.0562 6.85602 18.1019 6.85609L18.4907 6.85674C18.5315 6.85681 18.5714 6.85689 18.6106 6.85696L19.0437 6.85784C19.0768 6.85791 19.1092 6.85798 19.1409 6.85806L19.4074 6.85872C19.435 6.8588 19.462 6.85887 19.4883 6.85895L19.774 6.85985C19.7954 6.85992 19.8163 6.86 19.8366 6.86008L20.0043 6.86076C20.0214 6.86084 20.0379 6.86091 20.054 6.86099L20.2237 6.86191C20.236 6.86199 20.2479 6.86207 20.2594 6.86215L20.3519 6.86285C20.3611 6.86293 20.3698 6.86301 20.3782 6.86308L20.4448 6.86379C20.4512 6.86387 20.4574 6.86395 20.4632 6.86403L20.5085 6.86475C20.5128 6.86483 20.5168 6.86491 20.5206 6.86499L20.5493 6.86572C20.5519 6.8658 20.5544 6.86588 20.5566 6.86596L20.5774 6.86694C20.5787 6.86702 20.5799 6.8671 20.581 6.86719C20.5907 6.86809 20.5921 6.86826 20.5936 6.86843C21.1506 6.94943 21.6406 7.24043 21.9746 7.68843C22.3086 8.13543 22.4486 8.68643 22.3686 9.23843L21.4196 15.7964C21.2406 17.0444 20.1566 17.9854 18.8966 17.9854H7.97557C6.65857 17.9854 5.54357 16.9574 5.43657 15.6424L4.52057 4.74843L3.01357 4.48843C2.60457 4.41643 2.33157 4.02943 2.40157 3.62043C2.47357 3.21143 2.86857 2.94543 3.26857 3.00943ZM6.8758 8.34777L6.32857 8.34743L6.93157 15.5194C6.97557 16.0714 7.42657 16.4854 7.97757 16.4854H18.8946C19.4156 16.4854 19.8606 16.0974 19.9346 15.5824L20.8846 9.02343C20.9066 8.86743 20.8676 8.71143 20.7726 8.58543C20.6786 8.45843 20.5406 8.37643 20.3846 8.35443C20.3774 8.3547 20.3601 8.35496 20.3332 8.35519L20.2245 8.35581C20.2017 8.3559 20.1767 8.35599 20.1495 8.35607L19.583 8.35693C19.5352 8.35696 19.4855 8.35699 19.4339 8.35702L18.102 8.35696C18.0276 8.35694 17.9519 8.3569 17.8748 8.35687L16.3547 8.35595C16.2636 8.35588 16.1716 8.35581 16.0786 8.35574L15.2184 8.35505C15.1205 8.35497 15.0218 8.35489 14.9224 8.3548L14.0113 8.354C13.9084 8.35391 13.805 8.35381 13.7012 8.35372L13.0736 8.35314C12.9683 8.35305 12.8627 8.35295 12.7569 8.35285L11.7992 8.35195C11.6924 8.35185 11.5855 8.35175 11.4787 8.35166L10.838 8.35106C10.7314 8.35096 10.6249 8.35086 10.5186 8.35077L9.8834 8.35019C9.77806 8.35009 9.67303 8.35 9.56836 8.34991L8.63785 8.34911C8.53592 8.34902 8.43455 8.34894 8.33378 8.34886L7.15786 8.34796C7.06296 8.34789 6.96892 8.34783 6.8758 8.34777ZM17.2885 10.5437C17.7025 10.5437 18.0385 10.8797 18.0385 11.2937C18.0385 11.7077 17.7025 12.0437 17.2885 12.0437H14.5165C14.1015 12.0437 13.7665 11.7077 13.7665 11.2937C13.7665 10.8797 14.1015 10.5437 14.5165 10.5437H17.2885Z'
                  fill='#38343D'
                />
              </svg>
            </div>
          </NavLink>

          <button
            className={
              'navbar-toggler nav__button position-relative ' + (props.status ? 'light' : '')
            }
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className='collapse navbar-collapse wrapper__navbar-menu ml-lg-5'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav menu__center'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  exact
                  className={
                    'nav-link normal font__size--14 text__14-1024 ' +
                    (props.status ? 'color__white' : 'color__black')
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/about-us'
                  className={
                    'nav-link normal font__size--14 text__14-1024 ' +
                    (props.status ? 'color__white' : 'color__black')
                  }
                >
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/shop'
                  className={
                    'nav-link normal font__size--14 text__14-1024 ' +
                    (props.status ? 'color__white' : 'color__black')
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/news'
                  className={
                    'nav-link normal font__size--14 text__14-1024 ' +
                    (props.status ? 'color__white' : 'color__black')
                  }
                >
                  News
                </NavLink>
              </li>
              <li className='nav-item'>
                <div className='dropdown wrapper__dropdown-menu'>
                  <div
                    className={
                      'menu pointer ' + (props.status ? 'color__white light' : 'color__black')
                    }
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <div className='d-flex align-items-center normal font__size--14 text__14-1024'>
                      Pages
                      <svg
                        className='ml-2'
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2.97976 5.31307C3.15727 5.13556 3.43505 5.11942 3.63079 5.26466L3.68687 5.31307L7.99998 9.62596L12.3131 5.31307C12.4906 5.13556 12.7684 5.11942 12.9641 5.26466L13.0202 5.31307C13.1977 5.49058 13.2138 5.76836 13.0686 5.9641L13.0202 6.02018L8.35353 10.6868C8.17602 10.8644 7.89825 10.8805 7.70251 10.7353L7.64643 10.6868L2.97976 6.02018C2.7845 5.82492 2.7845 5.50833 2.97976 5.31307Z'
                          fill='#38343D'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                    <div className='line'></div>
                    <NavLink
                      className='dropdown-item normal font__size--14 text__14-1024'
                      to='/our-portofolio'
                    >
                      Portofolio
                    </NavLink>
                    <NavLink
                      to='/our-agenct'
                      className='dropdown-item normal font__size--14 text__14-1024'
                    >
                      Our Agent
                    </NavLink>
                    <NavLink
                      to='/service'
                      className='dropdown-item normal font__size--14 text__14-1024'
                    >
                      Our Service
                    </NavLink>
                    <NavLink
                      to='/wishlist'
                      className='dropdown-item normal font__size--14 text__14-1024'
                    >
                      Wishlist
                    </NavLink>
                    <NavLink
                      to='/map'
                      className='dropdown-item normal font__size--14 text__14-1024'
                    >
                      Location
                    </NavLink>
                    <NavLink
                      to='/faq'
                      className='dropdown-item normal font__size--14 text__14-1024'
                      href='#'
                    >
                      FAQ
                    </NavLink>
                  </div>
                </div>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  className={
                    'nav-link normal font__size--14 text__14-1024 ' +
                    (props.status ? 'color__white' : 'color__black')
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className='nav-item d-lg-none'>
                <div className='d-flex align-items-center justify-content-end'>
                  <NavLink
                    to='/login'
                    className={
                      'font__size--14 text__14-1024 mr-4 ' +
                      (props.status ? 'color__white' : 'color__black')
                    }
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to='/register'
                    className='btn btn__brown shadow btn__register font__size--14 text__14-1024 color__white rounded-0'
                  >
                    Register
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>

          <div className='d-none d-lg-flex justify-content-end align-items-center'>
            <NavLink to='/my-cart' className='font__size--14 text__14-1024 color__black'>
              <div className={'wrapper__cart ' + (props.status ? 'light' : '')}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.54437 19.9518C8.25837 19.9518 8.83937 20.5318 8.83937 21.2458C8.83937 21.9598 8.25837 22.5408 7.54437 22.5408C6.83037 22.5408 6.25037 21.9598 6.25037 21.2458C6.25037 20.5318 6.83037 19.9518 7.54437 19.9518ZM18.8247 19.9518C19.5397 19.9518 20.1207 20.5318 20.1207 21.2458C20.1207 21.9598 19.5397 22.5408 18.8247 22.5408C18.1107 22.5408 17.5307 21.9598 17.5307 21.2458C17.5307 20.5318 18.1107 19.9518 18.8247 19.9518ZM3.26857 3.00943L5.34857 3.36943C5.68357 3.42843 5.93857 3.70643 5.96757 4.04643L6.20257 6.84743L7.07642 6.8478C7.21902 6.84787 7.3601 6.84793 7.49969 6.84799L9.10399 6.84876C9.23187 6.84882 9.35833 6.84888 9.48336 6.84895L11.2548 6.84992C11.366 6.84998 11.476 6.85005 11.5846 6.85012L12.826 6.85091C12.9243 6.85097 13.0214 6.85104 13.1172 6.85111L14.209 6.85191C14.2952 6.85198 14.3803 6.85205 14.4641 6.85211L15.4161 6.85293C15.491 6.853 15.5647 6.85307 15.6374 6.85314L16.2631 6.85376C16.3295 6.85383 16.3949 6.8539 16.4592 6.85397L17.1838 6.85481C17.2403 6.85488 17.2958 6.85495 17.3505 6.85502L17.9622 6.85588C18.0097 6.85595 18.0562 6.85602 18.1019 6.85609L18.4907 6.85674C18.5315 6.85681 18.5714 6.85689 18.6106 6.85696L19.0437 6.85784C19.0768 6.85791 19.1092 6.85798 19.1409 6.85806L19.4074 6.85872C19.435 6.8588 19.462 6.85887 19.4883 6.85895L19.774 6.85985C19.7954 6.85992 19.8163 6.86 19.8366 6.86008L20.0043 6.86076C20.0214 6.86084 20.0379 6.86091 20.054 6.86099L20.2237 6.86191C20.236 6.86199 20.2479 6.86207 20.2594 6.86215L20.3519 6.86285C20.3611 6.86293 20.3698 6.86301 20.3782 6.86308L20.4448 6.86379C20.4512 6.86387 20.4574 6.86395 20.4632 6.86403L20.5085 6.86475C20.5128 6.86483 20.5168 6.86491 20.5206 6.86499L20.5493 6.86572C20.5519 6.8658 20.5544 6.86588 20.5566 6.86596L20.5774 6.86694C20.5787 6.86702 20.5799 6.8671 20.581 6.86719C20.5907 6.86809 20.5921 6.86826 20.5936 6.86843C21.1506 6.94943 21.6406 7.24043 21.9746 7.68843C22.3086 8.13543 22.4486 8.68643 22.3686 9.23843L21.4196 15.7964C21.2406 17.0444 20.1566 17.9854 18.8966 17.9854H7.97557C6.65857 17.9854 5.54357 16.9574 5.43657 15.6424L4.52057 4.74843L3.01357 4.48843C2.60457 4.41643 2.33157 4.02943 2.40157 3.62043C2.47357 3.21143 2.86857 2.94543 3.26857 3.00943ZM6.8758 8.34777L6.32857 8.34743L6.93157 15.5194C6.97557 16.0714 7.42657 16.4854 7.97757 16.4854H18.8946C19.4156 16.4854 19.8606 16.0974 19.9346 15.5824L20.8846 9.02343C20.9066 8.86743 20.8676 8.71143 20.7726 8.58543C20.6786 8.45843 20.5406 8.37643 20.3846 8.35443C20.3774 8.3547 20.3601 8.35496 20.3332 8.35519L20.2245 8.35581C20.2017 8.3559 20.1767 8.35599 20.1495 8.35607L19.583 8.35693C19.5352 8.35696 19.4855 8.35699 19.4339 8.35702L18.102 8.35696C18.0276 8.35694 17.9519 8.3569 17.8748 8.35687L16.3547 8.35595C16.2636 8.35588 16.1716 8.35581 16.0786 8.35574L15.2184 8.35505C15.1205 8.35497 15.0218 8.35489 14.9224 8.3548L14.0113 8.354C13.9084 8.35391 13.805 8.35381 13.7012 8.35372L13.0736 8.35314C12.9683 8.35305 12.8627 8.35295 12.7569 8.35285L11.7992 8.35195C11.6924 8.35185 11.5855 8.35175 11.4787 8.35166L10.838 8.35106C10.7314 8.35096 10.6249 8.35086 10.5186 8.35077L9.8834 8.35019C9.77806 8.35009 9.67303 8.35 9.56836 8.34991L8.63785 8.34911C8.53592 8.34902 8.43455 8.34894 8.33378 8.34886L7.15786 8.34796C7.06296 8.34789 6.96892 8.34783 6.8758 8.34777ZM17.2885 10.5437C17.7025 10.5437 18.0385 10.8797 18.0385 11.2937C18.0385 11.7077 17.7025 12.0437 17.2885 12.0437H14.5165C14.1015 12.0437 13.7665 11.7077 13.7665 11.2937C13.7665 10.8797 14.1015 10.5437 14.5165 10.5437H17.2885Z'
                    fill='#38343D'
                  />
                </svg>
              </div>
            </NavLink>
            <NavLink
              to='/login'
              className={
                'font__size--14 text__14-1024 mx-4 ' +
                (props.status ? 'color__white' : 'color__black')
              }
            >
              Sign in
            </NavLink>
            <NavLink
              to='/register'
              className='btn btn__brown shadow btn__register font__size--14 text__14-1024 color__white rounded-0'
            >
              Register
            </NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
Navbar.propTypes = {
  status: PropTypes.string,
};
export default Navbar;

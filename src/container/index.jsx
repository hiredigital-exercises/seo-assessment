import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Auth
import Login from './Auth/Login';
import Register from './Auth/Register';

import Homepage from './homepage/index';
import Portofolio from './homepage/Portofolio';
import PortofolioDetail from './homepage/PortofolioDetail';
import Agenct from './homepage/Agenct';
import AgenctDetail from './homepage/AgenctDetail';
import Wishlist from './homepage/Wishlist';
import Cart from './homepage/Cart';
import Faq from './homepage/Faq';
import Contact from './homepage/Contact';
import Checkout from './homepage/Checkout';
import Service from './homepage/Service';
import ServiceDetail from './homepage/ServiceDetail';
import Map from './homepage/Map';
import AboutUs from './homepage/AboutUs';
import Shop from './homepage/Shop';
import ProductDetail from './homepage/ProductDetail';
import News from './homepage/News';
import DetailNews from './homepage/DetailNews';

const Index = (props) => {
  return (
    <Fragment>
      <Helmet>
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5LTVK26');`}
        </script>
        <script src='https://code.jquery.com/jquery-3.6.1.js' />
        <script src='https://code.jquery.com/ui/1.13.2/jquery-ui.js' />
        <link rel='stylesheet' href='https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css' />

        <script async src='https://www.googletagmanager.com/gtag/js?id=G-6CRXBTPZKQ'></script>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-V3065146FY'></script>
        <script>
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-V3065146FY');
gtag('config', 'G-6CRXBTPZKQ');`}
        </script>

        <script src='https://www.google.com/recaptcha/api.js?render=6Ldzv7ghAAAAAFL7nWZd2h1vaE9BzGXDK1nGCWhJ'></script>
      </Helmet>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-5LTVK26' height='0' width='0'style='display:none;visibility:hidden'></iframe>`,
        }}
      />
      <Router forceRefresh>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/our-portofolio'>
            <Portofolio />
          </Route>
          <Route exact path='/portofolio/detail'>
            <PortofolioDetail />
          </Route>
          <Route exact path='/our-agenct'>
            <Agenct />
          </Route>
          <Route exact path='/agenct-detail'>
            <AgenctDetail />
          </Route>
          <Route exact path='/wishlist'>
            <Wishlist />
          </Route>
          <Route exact path='/my-cart'>
            <Cart />
          </Route>
          <Route exact path='/faq'>
            <Faq />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route exact path='/service'>
            <Service />
          </Route>
          <Route exact path='/service-detail'>
            <ServiceDetail />
          </Route>
          <Route exact path='/map'>
            <Map />
          </Route>
          <Route exact path='/about-us'>
            <AboutUs />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/product-detail'>
            <ProductDetail />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
          <Route exact path='/detail-news'>
            <DetailNews />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;

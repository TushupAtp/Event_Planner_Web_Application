// import React from 'react'
// import Register from './component/register.js'
// import Login from './component/login.js'
// import Insert from './component/Insert'
// import View from './component/View.js'
// import Footer from './component/Footer'
// import Navbar from './component/Navbar'
// import Payment from './component/payment.js'
// import Home from './component/home'
// import AboutUs from './component/aboutUs'
// import Services from './component/services'
// import Gallery from './component/gallery'
// import Testimonial from './component/testinmonial'
// import ContactUs from './component/contact'
// import Bookings from './component/Bookings'
// import Adminnav from './component/Adminnav'
// import AdminHome from './component/AdminHome'
// import Forget from './component/Forget'
// import Adminreq from './component/Adminreq'
// import Adminview from './component/Adminview'
// import Adminusers from './component/Adminusers'
// import './App.css'
// import MainNavbar from './component/MainNavbar'
// import LoginNavbar from './component/LoginNavbar'
// import Update from './component/Update'
// import { Route, Routes } from 'react-router-dom'

// // import { Navbar } from "react-bootstrap";

// export default function App() {
//   return (
//     <>
// <Route exact path="/login">
//   <MainNavbar />
//   <Login />
//   <Footer />
// </Route>

// <Route exact path="/payment" component={Invoice}></Route>

// <Route exact path="/register">
//   <MainNavbar />
//   <Register />
//   <Footer />
// </Route>

//       <Route exact path="/book">
//         <LoginNavbar />
//         <Insert />
//         <Footer />
//       </Route>

//       <Route exact path="/home">
//         <LoginNavbar />
//         <Home />
//         <Services />
//         <AboutUs />
//         <ContactUs />
//         <Footer />
//       </Route>

//       <Route exact path="/">
//         <MainNavbar />
//         <Home />
//         <Services />
//         <ContactUs />
//       </Route>

//       <Route exact path="/update" component={Update} />
//       <Route path="/forget" component={Forget}></Route>

//       <Route path="/aboutus">
//         <MainNavbar />
//         <AboutUs />
//         <Footer />
//       </Route>

//       <Route path="/services">
//         <MainNavbar />
//         <Services />
//         <Footer />
//       </Route>

//       <Route path="/gallery">
//         <MainNavbar />
//         <Gallery />
//         <Footer />
//       </Route>

//       <Route path="/testimonial">
//         <MainNavbar />
//         <Testimonial />
//         <Footer />
//       </Route>

//       <Route path="/contact">
//         <MainNavbar />
//         <ContactUs />
//         <Footer />
//       </Route>

//       <Route exact path="/admin">
//         <Adminnav />
//         <AdminHome />
//         <Adminreq />
//         <Footer />
//       </Route>

//       <Route exact path="/adminview">
//         <Adminnav />
//         <Adminview />
//         <Footer />
//       </Route>

//       <Route exact path="/footer">
//         <Footer />
//       </Route>

//       <Route exact path="/adminusers">
//         <Adminnav />
//         <Adminusers />
//         <Footer />
//       </Route>

//       <Route exact path="/view">
//         <LoginNavbar />
//         <View />
//         <Footer />
//       </Route>

//       <Route exact path="/bookings">
//         <LoginNavbar />
//         <Bookings />
//         <Footer />
//       </Route>
//     </>
//   )
// }

import React from 'react'

import Register from './component/register.js'
import Login from './component/login.js'
import Insert from './component/Insert'
import View from './component/View.js'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './component/home'
import AboutUs from './component/aboutUs'
import Services from './component/services'
import Gallery from './component/gallery'
import Testimonial from './component/testinmonial'
import ContactUs from './component/contact'
import Bookings from './component/Bookings'
import Update from './component/Update.js'
// import NavbarHome from './component/NavbarHome.js'
// import ClientHome from './component/clientshomepage.js'
import MainNavbar from './component/MainNavbar.js'
import LoginNavbar from './component/LoginNavbar.js'
import Forget from './component/Forget'
import AdminsHome from './component/AdminHome'
import Adminnav from './component/Adminnav'
import Adminreq from './component/Adminreq'
import Adminview from './component/Adminview'
import Adminusers from './component/Adminusers'

import './App.css'
import Invoice from './component/invoice.js'
import { Route, Routes } from 'react-router-dom'
import Terms from './component/termsAndCondition'

export default function App() {
  return (
    <>
      <Route exact path="/login">
        <MainNavbar />
        <Login />
        <ContactUs />
      </Route>

      <Route exact path="/register">
        <MainNavbar />
        <Register />
        <ContactUs />
      </Route>
      {/* <Route exact path="/login" component={Login}></Route> */}

      <Route exact path="/payment" component={Invoice}></Route>
      {/* <Route exact path="/register" component={Register}></Route> */}

      <Route path="/aboutus">
        <MainNavbar />
        <AboutUs />
        <ContactUs />
      </Route>

      <Route path="/services">
        <MainNavbar />
        <Services />
        <ContactUs />
      </Route>

      <Route path="/gallery">
        <MainNavbar />
        <Gallery />
        <ContactUs />
      </Route>

      <Route exact path="/testimonial">
        <MainNavbar />
        <Testimonial />
        <ContactUs />
      </Route>

      <Route path="/contact">
        <MainNavbar />
        <ContactUs />
      </Route>
      <Route path="/forget">
        <MainNavbar />
        <Forget />
      </Route>

      <Route exact path="/home">
        <LoginNavbar />
        <Home />
        <Services />
        <ContactUs />
      </Route>

      <Route exact path="/termsandconditions">
        <Terms />
      </Route>

      <Route exact path="/book">
        <LoginNavbar />
        <Insert />
        <ContactUs />
      </Route>

      <Route exact path="/">
        <MainNavbar />
        <Home />
        <Services />
        <ContactUs />
      </Route>

      <Route exact path="/admin">
        <Adminnav />
        <AdminsHome />
        <Adminreq />
        <ContactUs />
      </Route>

      <Route exact path="/viewpendingbookings">
        <Adminnav />
        <Adminreq />
        <ContactUs />
      </Route>

      <Route exact path="/adminview">
        <Adminnav />
        <Adminview />
        <ContactUs />
      </Route>

      <Route exact path="/adminusers">
        <Adminnav />
        <Adminusers />
        <ContactUs />
      </Route>

      <Route exact path="/view">
        <LoginNavbar />
        <View />
        <ContactUs />
      </Route>

      {/* <Route exact path="/clienthome">
        <Navbar />
        <ClientHome />
        <Footer />
      </Route> */}

      <Route exact path="/bookings">
        <LoginNavbar />
        <Bookings />
        <ContactUs />
      </Route>

      <Route exact path="/update">
        <LoginNavbar />
        <Update />
        <ContactUs />
      </Route>
    </>
  )
}

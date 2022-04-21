import React from 'react'
import mycss from './main.css'
import timg from './images/login2.jpg'
import { Link } from 'react-router-dom'

export default function Testimonial() {
  return (
    <>
      <link rel="stylesheet" href={mycss} />
      {/* Testimonial */}
      <section id="testimonial" style={{ marginTop: '60px' }}>
        <div className="title-text globfont">
          <p className="globfont">TESTMONIAL</p>
          <h1 className="globfont">Our Clients</h1>
        </div>
        <div className="testimonial-rows">
          <div className="testimonial-col">
            <div className="user">
              <img src="" />
              <div className="user-info">
                <h4>
                  Sneha Suryawanshi{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />{' '}
                </h4>
                <small>@snehasuryavanshi</small>
              </div>
            </div>
            <div>
              <p>
                Perfection is by far one of the best retreats around,
                professional in every aspect but friendly too. Michelle and her
                dedicated team will do their best to meet your needs and give
                you your ultimate treatment. Massages are a must and worth every
                penny. Highly worth a visit !
              </p>
            </div>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src={timg} />
              <div className="user-info">
                <h4>
                  Tushar Pardeshi
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
                </h4>
                <small>@tushupardeshi</small>
              </div>
            </div>
            <div>
              <p>
                Michelle has worked incredibly hard (and continues to!) to build
                up this amazing salon. Nestled away in the countryside it's the
                perfect place to escape for an truly relaxing experience
                regardless of what treatment you are having. You're always
                guaranteed a 5star service.
              </p>
            </div>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src="images/somnath.jpeg" />
              <div className="user-info">
                <h4>
                  Tushar Salunkhe{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
                </h4>
                <small>@tusharsalunkhe</small>
              </div>
            </div>
            <div>
              <p>
                Fantastic, relaxing salon, made special by Michelle and her
                friendly, professional team and the beautiful setting. I highly
                recommend it!
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-rows">
          <div className="testimonial-col">
            <div className="user">
              <img src="images/subodh.jpeg" />
              <div className="user-info">
                <h4>
                  Bhushan Chaudhari{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />{' '}
                </h4>
                <small>@bhushanchaudhari</small>
              </div>
            </div>
            <div>
              <p>
                Perfection is by far one of the best retreats around,
                professional in every aspect but friendly too. Michelle and her
                dedicated team will do their best to meet your needs and give
                you your ultimate treatment. Massages are a must and worth every
                penny. Highly worth a visit !
              </p>
            </div>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src="images/subodh.jpeg" />
              <div className="user-info">
                <h4>
                  Chinmesh Chavan{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />{' '}
                </h4>
                <small>@chinmeshchavan</small>
              </div>
            </div>
            <div>
              <p>
                Perfection is by far one of the best retreats around,
                professional in every aspect but friendly too. Michelle and her
                dedicated team will do their best to meet your needs and give
                you your ultimate treatment. Massages are a must and worth every
                penny. Highly worth a visit !
              </p>
            </div>
          </div>
          <div className="testimonial-col">
            <div className="user">
              <img src="images/subodh.jpeg" />
              <div className="user-info">
                <h4>
                  Soham Kothari{' '}
                  <i className="fa fa-twitter" style={{ fontSize: '15px' }} />{' '}
                </h4>
                <small>@sohamkothari</small>
              </div>
            </div>
            x
            <div>
              <p>
                Perfection is by far one of the best retreats around,
                professional in every aspect but friendly too. Michelle and her
                dedicated team will do their best to meet your needs and give
                you your ultimate treatment. Massages are a must and worth every
                penny. Highly worth a visit !
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

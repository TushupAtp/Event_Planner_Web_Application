import React from 'react'
import mycss from '../css/main.css'
import galcss from './gallery.css'

import glvid1 from './videos/galvid1.mp4'
import glvid2 from './videos/galvid2.mp4'
import glvid3 from './videos/galvid3.mp4'
import glvid4 from './videos/galvid4.mp4'
import glvid5 from './videos/galvid5.mp4'
import glvid6 from './videos/galvid6.mp4'
import glvid7 from './videos/galvid7.mp4'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <div>
      <link rel="stylesheet" href={mycss} />
      <link rel="stylesheet" href={galcss} />

      {/* Gallery images */}
      <section id="services">
        <div className="title-text mt-5 pt-3">
          <p>GALLERY</p>
          <h1>Some of Our Wonderful Events</h1>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid1} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid2} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid3} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid4} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid5} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid6} type="video/mp4" />
          </video>
        </div>
        <div className="video-container">
          <div className="color-overlay" />
          <video controls id="myVideo">
            <source src={glvid7} type="video/mp4" />
          </video>
        </div>
        {/*<div className="service-box">
                    <div className="single-service">
                        <img className="serviceIMG" src={glimg1} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Wedding</h3>
                            <hr />
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" src={glimg2} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Birthday</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" src={glimg3} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Seminar</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" src={glimg4} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Exhibition</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" src={glimg5} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Award Function</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" src={glimg6} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Sport Events</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                </div>*/}
      </section>
    </div>
  )
}

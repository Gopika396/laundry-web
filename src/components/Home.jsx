import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/images/hero.jpg";
import washing from "../assets/images/washing.jpg";
import ironing from "../assets/images/steam.jpg";
import dryclean from "../assets/images/dryclean.jpg";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <p className="hero-small">
                SMART LAUNDRY SERVICE
              </p>

              <h1>
                Clean Clothes.
                <br />
                <span>More Free Time.</span>
              </h1>

              <p className="hero-text">
                We wash, dry, iron and care for your clothes
                while you focus on the things that matter.
              </p>

              <div className="hero-buttons">
                <Link
                  to="/products"
                  className="btn main-btn"
                >
                  View Services
                </Link>

                <Link
                  to="/contact"
                  className="btn second-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >
              <div className="hero-image-box">
                <img
                  src={hero}
                  alt="Laundry Service"
                  className="img-fluid"
                />

                <div className="hero-badge">
                  <strong>100%</strong>
                  <small>Fresh Care</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="container text-center">

          <p className="section-label">
            WHY LAUNDROCARE
          </p>

          <h2>
            Laundry made <span>easy</span>
          </h2>

          <p className="section-description">
            From everyday clothes to special garments,
            our professional laundry services keep everything
            clean, fresh and ready to wear.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services">
        <div className="container">

          <div className="row g-4">

            <div
              className="col-md-4"
              data-aos="zoom-in"
            >
              <div className="service-box">

                <img
                  src={washing}
                  alt="Washing"
                />

                <div className="service-content">
                  <h3>Wash & Care</h3>

                  <p>
                    Professional washing for everyday
                    clothes with gentle fabric care.
                  </p>
                </div>

              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="service-box">

                <img
                  src={ironing}
                  alt="Steam Ironing"
                />

                <div className="service-content">
                  <h3>Steam Ironing</h3>

                  <p>
                    Neatly pressed clothes with a clean
                    and professional finish.
                  </p>
                </div>

              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="service-box">

                <img
                  src={dryclean}
                  alt="Dry Cleaning"
                />

                <div className="service-content">
                  <h3>Dry Cleaning</h3>

                  <p>
                    Special care for delicate and premium
                    garments that need extra attention.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* STEPS */}
      <section className="steps-section">
        <div className="container">

          <div className="text-center mb-5">

            <p className="section-label">
              SIMPLE PROCESS
            </p>

            <h2>
              Laundry in <span>3 steps</span>
            </h2>

          </div>

          <div className="row g-4">

            <div
              className="col-md-4"
              data-aos="fade-up"
            >
              <div className="step-card">

                <div className="step-number">
                  01
                </div>

                <h3>Choose Service</h3>

                <p>
                  Select a KG-based or per-cloth laundry
                  service according to your needs.
                </p>

              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="step-card">

                <div className="step-number">
                  02
                </div>

                <h3>We Clean</h3>

                <p>
                  Your clothes are washed, dried and
                  finished with professional care.
                </p>

              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="step-card">

                <div className="step-number">
                  03
                </div>

                <h3>Fresh Delivery</h3>

                <p>
                  Your clean and fresh clothes are ready
                  for pickup or delivery.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section
        className="home-cta"
        data-aos="fade-up"
      >
        <div className="container text-center">

          <h2>
            Give your clothes the care they deserve.
          </h2>

          <p>
            Choose a service and make laundry easier today.
          </p>

          <Link
            to="/products"
            className="btn main-btn"
          >
            Explore Services
          </Link>

        </div>
      </section>
    </>
  );
}

export default Home;
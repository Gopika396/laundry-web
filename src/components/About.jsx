import React from "react";

import washing from "../assets/images/washing.jpg";
import ironing from "../assets/images/steam.jpg";

function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="container text-center">

          <p>ABOUT US</p>

          <h1>
            Laundry with <span>care</span>
          </h1>

          <p className="header-text">
            Professional laundry services designed for
            modern everyday living.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <img
                src={washing}
                alt="Laundry Washing"
                className="about-image"
              />
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >

              <p className="section-label">
                OUR STORY
              </p>

              <h2>
                We make laundry
                <span> less stressful.</span>
              </h2>

              <p>
                LaundroCare was created to make professional
                laundry services simple and accessible.
              </p>

              <p>
                Whether you have a few shirts or several
                kilograms of clothes, you can choose a service
                that works for you.
              </p>

              <p>
                Our goal is simple — clean clothes, careful
                handling and a convenient experience.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">

          <div className="text-center mb-5">

            <p className="section-label">
              OUR VALUES
            </p>

            <h2>
              Why people choose <span>us</span>
            </h2>

          </div>

          <div className="row g-4">

            <div
              className="col-md-4"
              data-aos="fade-up"
            >
              <div className="value-card">

                <div className="value-icon">
                  ✨
                </div>

                <h3>Quality</h3>

                <p>
                  We focus on clean clothes and careful
                  handling for every order.
                </p>

              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="value-card">

                <div className="value-icon">
                  🧺
                </div>

                <h3>Convenience</h3>

                <p>
                  Simple services for KG-based and
                  individual clothing requirements.
                </p>

              </div>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="value-card">

                <div className="value-icon">
                  💜
                </div>

                <h3>Care</h3>

                <p>
                  Every garment receives the attention
                  it deserves.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECOND ABOUT */}
      <section className="about-section second-about">
        <div className="container">

          <div className="row align-items-center g-5">

            <div
              className="col-lg-6 order-lg-2"
              data-aos="fade-left"
            >
              <img
                src={ironing}
                alt="Steam Ironing Clothes"
                className="about-image"
              />
            </div>

            <div
              className="col-lg-6 order-lg-1"
              data-aos="fade-right"
            >

              <p className="section-label">
                PROFESSIONAL FINISH
              </p>

              <h2>
                Fresh, neat and
                <span> ready to wear.</span>
              </h2>

              <p>
                From washing to ironing, our services are
                designed to give your clothes a fresh finish.
              </p>

              <p>
                We offer flexible pricing so you can select
                services based on kilograms or individual
                garments.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;
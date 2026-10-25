import React, { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    setMessage(
      "Thank you! We will contact you shortly."
    );
  };

  return (
    <>

      <section className="page-header">

        <div className="container text-center">

          <p>GET IN TOUCH</p>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p className="header-text">
            Have a laundry question? Send us a message.
          </p>

        </div>

      </section>

      <section className="contact-section">

        <div className="container">

          <div className="row g-5">

            <div
              className="col-lg-5"
              data-aos="fade-right"
            >

              <p className="section-label">
                CONTACT DETAILS
              </p>

              <h2>
                Let's talk about
                <span> your laundry.</span>
              </h2>

              <p>
                Contact us for laundry services, pricing
                and general enquiries.
              </p>

              <div className="contact-info">

                <div>
                  <strong>📍 Location</strong>
                  <p>Bangalore, Karnataka</p>
                </div>

                <div>
                  <strong>📞 Phone</strong>
                  <p>+91 1111 1211</p>
                </div>

                <div>
                  <strong>✉️ Email</strong>
                  <p>hello@laundrocare.com</p>
                </div>

                <div>
                  <strong>⏰ Working Hours</strong>
                  <p>8:00 AM - 9:00 PM</p>
                </div>

              </div>

            </div>

            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <div className="contact-form-box">

                <form onSubmit={handleSubmit}>

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label>
                        Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        required
                      />

                    </div>

                    <div className="col-md-6 mb-3">

                      <label>
                        Phone
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Your phone"
                        required
                      />

                    </div>

                  </div>

                  <div className="mb-3">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                      required
                    />

                  </div>

                  <div className="mb-3">

                    <label>
                      Service
                    </label>

                    <select
                      className="form-select"
                    >
                      <option>
                        Select Service
                      </option>

                      <option>
                        Per KG Laundry
                      </option>

                      <option>
                        Per Cloth Laundry
                      </option>

                      <option>
                        Dry Cleaning
                      </option>

                      <option>
                        Ironing
                      </option>
                    </select>

                  </div>

                  <div className="mb-3">

                    <label>
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message"
                      required
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="main-btn border-0"
                  >
                    Send Message
                  </button>

                  {message && (
                    <p className="success-message">
                      {message}
                    </p>
                  )}

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;
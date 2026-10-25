import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Laundro<span>Care</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#laundroNavbar"
            aria-controls="laundroNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="laundroNavbar"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link contact-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTES */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}

      <footer className="footer-section">

        <div className="container">

          <div className="row text-center text-lg-start">

            <div
              className="col-lg-4 mb-4"
              data-aos="fade-up"
            >
              <h3>
                Laundro<span>Care</span>
              </h3>

              <p>
                Fresh clothes, professional care and simple
                laundry services for your everyday life.
              </p>
            </div>

            <div
              className="col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h5>Quick Links</h5>

              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Services</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div
              className="col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h5>Contact</h5>

              <p>📍 Bangalore, India</p>
              <p>📞 +91 1111 1211</p>
              <p>✉️ hello@laundrocare.com</p>
            </div>

          </div>

          <hr />

          <div className="copyright">
            <p>
              © 2026 LaundroCare. All Rights Reserved.
            </p>
          </div>

        </div>

      </footer>
    </>
  );
}

export default App;
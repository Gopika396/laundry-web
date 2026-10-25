import React, { useState } from "react";

import shirt from "../assets/images/shirt.jpg";
import jeans from "../assets/images/jeans.jpg";
import saree from "../assets/images/saree.jpg";
import dress from "../assets/images/dress.jpg";
import blanket from "../assets/images/blanket.jpg";
import curtain from "../assets/images/curtain.jpg";
import shoe from "../assets/images/shoe.jpg";

function Product() {
  const [filter, setFilter] = useState("all");

  const kgServices = [
    {
      name: "Regular Wash",
      price: 70,
      unit: "KG",
      description: "Everyday washing and drying.",
    },
    {
      name: "Wash & Iron",
      price: 110,
      unit: "KG",
      description: "Wash, dry and neatly ironed.",
    },
    {
      name: "Premium Wash",
      price: 150,
      unit: "KG",
      description: "Premium fabric care and washing.",
    },
    {
      name: "Dry Cleaning",
      price: 220,
      unit: "KG",
      description: "Professional dry cleaning service.",
    },
  ];

  const clothServices = [
    {
      name: "Shirt",
      price: 35,
      image: shirt,
      description: "Wash and press for shirts.",
    },
    {
      name: "Jeans",
      price: 50,
      image: jeans,
      description: "Deep wash and care for jeans.",
    },
    {
      name: "Saree",
      price: 80,
      image: saree,
      description: "Gentle care for sarees.",
    },
    {
      name: "Dress",
      price: 70,
      image: dress,
      description: "Careful washing for dresses.",
    },
    {
      name: "Blanket",
      price: 140,
      image: blanket,
      description: "Deep cleaning for blankets.",
    },
    {
      name: "Curtain",
      price: 100,
      image: curtain,
      description: "Professional curtain cleaning.",
    },
    {
      name: "Shoe",
      price: 120,
      image: shoe,
      description: "Specialized shoe cleaning service.",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <section className="page-header">
        <div className="container text-center">

          <p>OUR SERVICES</p>

          <h1>
            Pick your <span>laundry service</span>
          </h1>

          <p className="header-text">
            Choose pricing based on kilograms or individual clothing items.
          </p>

        </div>
      </section>

      {/* FILTER */}
      <section className="products-section">
        <div className="container">

          <div
            className="filter-buttons text-center"
            data-aos="fade-up"
          >

            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={filter === "kg" ? "active" : ""}
              onClick={() => setFilter("kg")}
            >
              Per KG
            </button>

            <button
              className={filter === "cloth" ? "active" : ""}
              onClick={() => setFilter("cloth")}
            >
              Per Cloth
            </button>

          </div>

          {/* KG SERVICES */}
          {(filter === "all" || filter === "kg") && (
            <div className="product-category">

              <div className="category-heading">
                <h2>KG Based Services</h2>

                <p>
                  Best for regular laundry loads.
                </p>
              </div>

              <div className="row g-4">

                {kgServices.map((service, index) => (
                  <div
                    className="col-md-6 col-lg-3"
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="kg-card">

                      <div className="kg-icon">
                        🧺
                      </div>

                      <h3>
                        {service.name}
                      </h3>

                      <p>
                        {service.description}
                      </p>

                      <div className="price">
                        ₹{service.price}
                        <small>
                          /{service.unit}
                        </small>
                      </div>

                      <button
                        className="service-btn"
                        onClick={() =>
                          console.log(
                            `${service.name} selected`
                          )
                        }
                      >
                        Select Service
                      </button>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          )}

          {/* CLOTH SERVICES */}
          {(filter === "all" || filter === "cloth") && (
            <div className="product-category">

              <div className="category-heading">
                <h2>
                  Per Cloth Services
                </h2>

                <p>
                  Choose individual garments.
                </p>
              </div>

              <div className="row g-4">

                {clothServices.map((item, index) => (
                  <div
                    className="col-md-6 col-lg-3"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >

                    <div className="cloth-card">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cloth-content">

                        <h3>
                          {item.name}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                        <div className="cloth-bottom">

                          <strong>
                            ₹{item.price}
                          </strong>

                          <span>
                            /piece
                          </span>

                        </div>

                        <button
                          className="service-btn"
                          onClick={() =>
                            console.log(
                              `${item.name} selected`
                            )
                          }
                        >
                          Select Service
                        </button>

                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default Product;
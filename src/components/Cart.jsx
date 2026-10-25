import React, { useState } from "react";

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Regular Wash",
      type: "KG",
      price: 70,
      quantity: 2,
    },
    {
      id: 2,
      name: "Shirt",
      type: "Piece",
      price: 35,
      quantity: 3,
    },
  ]);

  const increase = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(
      items.filter((item) => item.id !== id)
    );
  };

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* HEADER */}
      <section className="page-header">
        <div className="container text-center">

          <p>YOUR ORDER</p>

          <h1>
            Laundry <span>Cart</span>
          </h1>

        </div>
      </section>

      {/* CART */}
      <section className="cart-section">
        <div className="container">

          {items.length === 0 ? (

            <div className="empty-cart text-center">

              <div className="empty-icon">
                🧺
              </div>

              <h2>
                Your cart is empty
              </h2>

              <p>
                Add a laundry service to get started.
              </p>

            </div>

          ) : (

            <div className="row g-4">

              <div className="col-lg-8">

                {items.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <div>
                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ₹{item.price} / {item.type}
                      </p>
                    </div>

                    <div className="quantity-box">

                      <button
                        onClick={() =>
                          decrease(item.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increase(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                ))}

              </div>

              <div className="col-lg-4">

                <div className="summary-card">

                  <h2>
                    Order Summary
                  </h2>

                  <div className="summary-row">
                    <span>Services</span>

                    <span>
                      {items.length}
                    </span>
                  </div>

                  <div className="summary-row">
                    <span>Total</span>

                    <strong>
                      ₹{total}
                    </strong>
                  </div>

                  <hr />

                  <button
                    className="checkout-btn"
                    onClick={() =>
                      alert(
                        "Thank you! Your laundry order has been placed."
                      )
                    }
                  >
                    Place Order
                  </button>

                </div>

              </div>

            </div>

          )}

        </div>
      </section>
    </>
  );
}

export default Cart;
import axios from "axios";
import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../CartContext";

const Mpesapayment = () => {
  const location = useLocation();
  const locationState = location.state || {};

  const { singleproduct, cart: cartFromState } = locationState;
  const { cart: cartFromContext } = useContext(CartContext);

  const cart =
    Array.isArray(cartFromState) && cartFromState.length > 0
      ? cartFromState
      : cartFromContext;

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const amount =
    cart && cart.length > 0
      ? cart.reduce(
          (sum, item) =>
            sum + Number(item.product_cost) * Number(item.qty || 1),
          0
        )
      : Number(singleproduct?.product_cost || 0);

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait...");
    setSuccess("");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("phone", phone);
      formdata.append("amount", amount);

      const response = await axios.post(
        "https://mutheuhiggs.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setSuccess(response.data.message || "Payment request sent successfully");
      setLoading("");
    } catch (error) {
      setLoading("");
      setError("Something went wrong. Check your Flask route or phone number.");
      console.log(error);
    }
  };

  return (
    <div className="row justify-content-center">
      <h1 className="text-primary text-center">Make Payment - Lipa na Mpesa</h1>

      <div className="col-md-8 card shadow p-4">
        <div className="card-body">
          <h3 className="text-warning">{loading}</h3>
          <h3 className="text-success">{success}</h3>
          <h3 className="text-danger">{error}</h3>

          {cart && cart.length > 0 ? (
            <>
              <h4>Your Cart Items</h4>

              {cart.map((item, index) => (
                <div key={index} className="border-bottom mb-2">
                  <h5>{item.product_name}</h5>
                  <p>
                    Ksh {item.product_cost} x {item.qty || 1}
                  </p>
                </div>
              ))}
            </>
          ) : singleproduct ? (
            <>
              <h4>{singleproduct.product_name}</h4>
              <p>{singleproduct.product_description}</p>
              <b className="text-danger">
                Ksh {singleproduct.product_cost}
              </b>
            </>
          ) : (
            <h4>No product selected</h4>
          )}

          <h3 className="text-info mt-3">Total: Ksh {amount}</h3>

          <form onSubmit={handlesubmit}>
            <input
              type="number"
              className="form-control"
              placeholder="Enter phone 254xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <br />

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={amount === 0}
            >
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mpesapayment;
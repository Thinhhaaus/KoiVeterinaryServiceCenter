import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Consult() {
  return (
    <>
     
  {/* Header */}
  <Header/>
  {/* Main Content */}
  <div className="container mt-5">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Service</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Online doctor consultation</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Payment
        </li>
      </ol>
    </nav>
    <h1 className="display-5">Direct Veterinary Consultation Service</h1>
    <p>
      Welcome to our direct consulting service! We are always ready to support
      you in all situations related to caring for and treating Koi fish.
    </p>
    <p>
      To make the consultation session most effective, please prepare the
      following information:
    </p>
    <ul>
      <li>Basic information about your Koi fish</li>
      <li>
        Information about the pond or aquarium (capacity, number of fish, etc.)
      </li>
      <li>
        Water quality parameters (ammonia, nitrite, nitrate, pH, water hardness,
        temperature, salinity)
      </li>
      <li>Illustrative images or videos (sending videos is encouraged)</li>
    </ul>
    <p>
      We will review the diagnoses together, provide a list of possibilities,
      and suggest appropriate treatment methods. If necessary, we will connect
      you with veterinarians who specialize in aquatics in your area for further
      in-depth support.
    </p>
    {/* Consultation Form */}
    <form className="bg-primary text-white p-4 rounded mb-5">
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Up to 32 characters"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Up to 32 characters"
            required=""
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="At least 10 - 11 numbers"
            required=""
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="youremail@gmail.com"
            required=""
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="consultTime" className="form-label">
            Consulting time (please choose one)
          </label>
          <select id="consultTime" className="form-select" required="">
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={60}>1 hour</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="messages" className="form-label">
            Messages
          </label>
          <textarea
            className="form-control"
            id="messages"
            rows={3}
            defaultValue={""}
          />
        </div>
      </div>
      {/* Summary */}
      <div className="text-end text-white">
        <p>
          <strong>Summary</strong>
        </p>
        <p>Online Consultation (15 minutes)</p>
        <p>
          <strong>Total: 150.00$</strong>
        </p>
      </div>
    </form>
    {/* Payment Method Section */}
    <section className="payment-method bg-light p-4 rounded shadow-sm mb-5">
      <h2 className="mb-4">Payment method</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="creditCard"
              defaultChecked=""
            />
            <label className="form-check-label" htmlFor="creditCard">
              Credit card
            </label>
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard.png"
              alt="MasterCard"
            />
            <img
              src="https://img.icons8.com/color/48/000000/amex.png"
              alt="American Express"
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paypal"
            />
            <label className="form-check-label" htmlFor="paypal">
              PayPal
            </label>
            <img
              src="https://img.icons8.com/color/48/000000/paypal.png"
              alt="PayPal"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="nameOnCard" className="form-label">
              Name on card
            </label>
            <input
              type="text"
              className="form-control"
              id="nameOnCard"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card number
            </label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="expiryDate" className="form-label">
                Expiry date
              </label>
              <input
                type="text"
                className="form-control"
                id="expiryDate"
                placeholder="MM/YY"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cvc" className="form-label">
                CVC
              </label>
              <input
                type="text"
                className="form-control"
                id="cvc"
                placeholder={123}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-warning mt-4"> <Link to={"/Bill"}>Submit</Link></button>
    </section>
  </div>
  {/* Footer */}
  <Footer/>
</>

  
  )
}

export default Consult

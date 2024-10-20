import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import "../assets/css/Bill.css"

function Bill() {
  return (
    <>
       <Header />
      <div className="container my-5">
     
        <section className="invoice-details">
          <div className="text-center mb-4">
            <h1 className="display-6">Invoice Details</h1>
          </div>
          <div className="row invoice-summary bg-light p-4 rounded shadow-sm mb-4">
            <div className="col-md-6">
              <p className="mb-2">
                Invoice <a href="#">#001</a>
              </p>
              <p>
                <strong>Payment date:</strong> 16/08/2024
              </p>
              <p>
                <strong>Status:</strong> <span className="badge bg-success">Paid</span>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Service:</strong> Appointment for fish disease treatment
              </p>
              <p>
                <strong>Payment method:</strong> Credit card
              </p>
            </div>
          </div>

          <div className="row client-info align-items-center bg-light p-4 rounded shadow-sm mb-4">
            <div className="col-md-2 text-center">
              <img src="../public/img/Doctor.png" alt="Avatar" className="img-fluid rounded-circle" width="80" />
            </div>
            <div className="col-md-10">
              <h2 className="h5">Nguyen Van A</h2>
              <p className="mb-1">Email: NguyenVanA@gmail.com</p>
              <p className="mb-1">Number: 0902548655</p>
              <p className="mb-0">Address: 369 Phan Đình Phùng, Phú Nhuận, TP. Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>

          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Summary</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Appointment for fish disease treatment</td>
                <td>$350.00</td>
              </tr>
              <tr>
                <td>Travel expenses</td>
                <td>$100.00</td>
              </tr>
              <tr className="fw-bold">
                <td>Total</td>
                <td>$450.00</td>
              </tr>
            </tbody>
          </table>
        </section>
       
      </div>
      <Footer />
    </>
  );
}

export default Bill;

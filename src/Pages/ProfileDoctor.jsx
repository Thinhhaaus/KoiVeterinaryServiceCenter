import React from 'react'
import "../assets/css/ProfileDoctor.css"
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
function ProfileDoctor() {
  return (
    <>
    
 <Header/>
  <main>
    <section className="profile">
      <h1>Doctor’s profile</h1>
      <div className="profile-container">
        <div className="profile-img">
          <img src="../public/img/Doctor.png" alt="Doctor Mulani Jan" />
        </div>
        <div className="profile-details">
          <h2>DR. Mulani Jan</h2>
          <p>
            <strong>DOB:</strong> 04/05/1994
          </p>
          <p>
            <strong>Email contact:</strong>{" "}
            <a href="mailto:MualaniJan@gmail.com">MualaniJan@gmail.com</a>
          </p>
          <p>
            <strong>Position:</strong> <a href="#">online consultant</a> |{" "}
            <a href="#">doctor examining and treating patients</a>
          </p>
          <p>
            <strong>Experience:</strong> 5 years
          </p>
          <p>
            <strong>Patients:</strong> 236
          </p>
          <p>
            <strong>Workplace:</strong> Veterinarian at VCA Animal Hospital
          </p>
          <div className="working-time">
            <p>
              <strong>Working time</strong> (please select a time to schedule):
            </p>
            <div className="time-slots">
              <button>06:30 AM</button>
              <button>11:45 AM</button>
              <button>18h00 PM</button>
            </div>
          </div>
          <div className="action-buttons">
          <Link to="/Consult" className="btn btn-primary book-now">Book doctor now</Link>
          
            <button className="see-another">See another doctor</button>
          </div>
        </div>
      </div>
    </section>
    <section className="reviews">
      <h3>214 reviews</h3>
      <div className="review">
        <p>
          <strong>Jonny Jonny</strong> (3 days ago)
        </p>
        <p>
          Have you ever anesthetized or performed procedures on a mudskipper? I
          am a veterinary technician student writing a research paper on
          mudskippers in captivity and am curious to see if it has been done
          before and if so how. Thank you!!
        </p>
      </div>
      <div className="review">
        <p>
          <strong>Kinich Chiba</strong> (1 week ago)
        </p>
        <p>
          Have you ever anesthetized or performed procedures on a mudskipper? I
          am a veterinary technician student writing a research paper on
          mudskippers in captivity and am curious to see if it has been done
          before and if so how. Thank you!!
        </p>
      </div>
    </section>
  </main>
  <Footer/>
</>

 
  )
}

export default ProfileDoctor

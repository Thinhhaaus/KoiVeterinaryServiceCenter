import React from 'react'
import "../assets/css/ListDoctor.css"
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
function ListDoctor() {
  return (
    <>
      <>
  <Header/>
  <div className="container" style={{display: "flex", margin : "20px"}}>
    <aside>
      <ul>
        <li>Other service</li>
        <li>
          <a href="#" className="active">
            Online doctor consultation
          </a>
        </li>
        <li>
          <Link to={"/Pond"}><a href="#">Pond quality assessment</a></Link>
        </li>
        <li>
          <a href="#">Appointment for fish disease treatment</a>
        </li>
        <li>Reference</li>
        <li>
          <a href="#">Home page</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
    </aside>
    <main style={{
   width: '75%',
   marginLeft: '5%'
}}>
      <h1>Online doctor consultation</h1>
      <div className="service-path">
        <span>Service &gt;</span>
        <span style={{ color: "orange" }}>Online doctor consultation</span>
      </div>
      <div className="filter-section">
        <select style={{ width: "32%" }}>
          <option value="all">All</option>
          {/* Add options for filtering by specialization */}
        </select>
        <div className="search-box">
          <input type="text" placeholder="Search doctor by name" />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </div>
      <div className="doctor-list">
        {/* Example of a doctor card */}
        <div className="doctor-card">
          <img src="Image/pngtree-doctor-and-health-care-png-image_11719602.png" />
          
          <Link to={"/Profile"}><h3>Justin Biahoi</h3></Link>
          <p>Aquatic veterinary</p>
          <p className="rating">4.8</p>
        </div>
        <div className="doctor-card">
          <img src="Image/pngtree-doctor-and-health-care-png-image_11719602.png" />
          <h3>Justin Biahoi</h3>
          <p>Aquatic veterinary</p>
          <p className="rating">4.8</p>
        </div>
        <div className="doctor-card">
          <img src="Image/pngtree-doctor-and-health-care-png-image_11719602.png" />
          <h3>Justin Biahoi</h3>
          <p>Aquatic veterinary</p>
          <p className="rating">4.8</p>
        </div>
        <div className="doctor-card">
          <img src="Image/pngtree-doctor-and-health-care-png-image_11719602.png" />
          <h3>Justin Biahoi</h3>
          <p>Aquatic veterinary</p>
          <p className="rating">4.8</p>
        </div>
        <div className="doctor-card">
          <img src="Image/pngtree-doctor-and-health-care-png-image_11719602.png" />
          <h3>Justin Biahoi</h3>
          <p>Aquatic veterinary</p>
          <p className="rating">4.8</p>
        </div>
        <div className="doctor-card">
          <img src="Image/pngtree-doctor-and-health-care-png-image_11719602.png" />
          <h3>Justin Biahoi</h3>
          <p>Aquatic veterinary</p>
          <p className="rating">4.8</p>
        </div>
        {/* Repeat doctor cards as needed */}
      </div>
      <div className="pagination">
        <span>Previous</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>Next</span>
      </div>
    </main>
  </div>
  <Footer/>
</>

    </>
  )
}

export default ListDoctor

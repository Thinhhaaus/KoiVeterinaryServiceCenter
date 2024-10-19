import React from 'react'

function ListDoctor() {
  return (
    <>
      <>
  <header>
    <nav>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Standard Care</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <div className="container">
    <aside>
      <ul>
        <li>Other service</li>
        <li>
          <a href="#" className="active">
            Online doctor consultation
          </a>
        </li>
        <li>
          <a href="#">Pond quality assessment</a>
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
    <main>
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
  <footer>
    <div className="footer-container">
      <div className="footer-left"></div>
      <div className="footer-middle">
        <div className="footer-section">
          <h4>Use cases</h4>
          <ul>
            <li>
              <a href="#">UI design</a>
            </li>
            <li>
              <a href="#">UX design</a>
            </li>
            <li>
              <a href="#">Wireframing</a>
            </li>
            <li>
              <a href="#">Diagramming</a>
            </li>
            <li>
              <a href="#">Brainstorming</a>
            </li>
            <li>
              <a href="#">Online whiteboard</a>
            </li>
            <li>
              <a href="#">Team collaboration</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Design</a>
            </li>
            <li>
              <a href="#">Prototyping</a>
            </li>
            <li>
              <a href="#">Development features</a>
            </li>
            <li>
              <a href="#">Design systems</a>
            </li>
            <li>
              <a href="#">Collaboration features</a>
            </li>
            <li>
              <a href="#">Design process</a>
            </li>
            <li>
              <a href="#">FigJam</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Best practices</a>
            </li>
            <li>
              <a href="#">Colors</a>
            </li>
            <li>
              <a href="#">Color wheel</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Resource library</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 - Koi Health Care</p>
      <div className="footer-links">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
      </div>
    </div>
  </footer>
</>

    </>
  )
}

export default ListDoctor

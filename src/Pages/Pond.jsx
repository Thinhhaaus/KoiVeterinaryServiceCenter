import React from 'react'
import Header from '../components/Header'
import  "../assets/css/Pond.css"
import { Link } from 'react-router-dom'
function Pond() {
  return (
    <>
      <>
<Header/>
<div className="container" style={{display: "flex", justifyContent: "space-between", padding: "20px"}}>
    {/* Calendar Section */}
   
  <div class="calendar-section">
    <div class="calendar-header text-center mb-3">
      <h3>Appointment Calendar</h3>
    </div>
    <div class="calendar">
      <table class="table table-bordered table-hover text-center align-middle">
        <thead class="table-light">
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td colspan="4"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="calendar-footer text-center mt-3">
      <p>August, 2024</p>
      <div class="calendar-nav d-flex justify-content-between">
        <span class="btn btn-outline-primary">&lt;</span>
        <span class="btn btn-outline-primary">&gt;</span>
      </div>
    </div>
  </div>


    {/* Doctor Appointment Section */}
    <div className="doctor-section">
      <h2>
        Service &gt;{" "}
        <span style={{ color: "coral" }}>Pond water assessment doctor</span>
      </h2>
      <input type="text" placeholder="Search Doctor's name" />
      <select>
        <option value="all">All</option>
      </select>
      {/* Doctor Appointments List */}
      <div className="doctor-list">
        <div className="doctor-card">
          <img src="Image/Emily.jpg" />
          <div className="doctor-info">
            <h3>Dr. Emily Joshnson</h3>
            <p>
              from Banfield Pet Hospital. Experienced in advising on skin
              problems.
            </p>
            <div className="appointment-times">
              <button>06:30 AM</button>
              <button>11:45 AM</button>
              <button>18h00 PM</button>
            </div>
          </div>
        
            <Link to="/WaterPond" className="book-now">Book now</Link>
         
        </div>
      </div>
      {/* Repeat for additional doctors */}
      <div className="doctor-card">
        <img src="Image/Emily.jpg" />
        <div className="doctor-info">
          <h3>Dr. Emily Joshnson</h3>
          <p>
            from Banfield Pet Hospital. Experienced in advising on skin
            problems.
          </p>
          <div className="appointment-times">
            <button>06:30 AM</button>
            <button>11:45 AM</button>
            <button>18h00 PM</button>
          </div>
        </div>
        <button className="book-now">Book now</button>
      </div>
      <div className="doctor-card">
        <img src="Image/Emily.jpg" />
        <div className="doctor-info">
          <h3>Dr. Emily Joshnson</h3>
          <p>
            from Banfield Pet Hospital. Experienced in advising on skin
            problems.
          </p>
          <div className="appointment-times">
            <button>06:30 AM</button>
            <button>11:45 AM</button>
            <button>18h00 PM</button>
          </div>
        </div>
        <button className="book-now">Book now</button>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Pond

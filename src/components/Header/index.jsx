import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="text-black bg-light shadow-sm">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between py-3 ">
                        <a
                            href="/"
                            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                        >
                            <svg
                                className="bi me-2"
                                width={40}
                                height={32}
                                role="img"
                                aria-label="Logo"
                            >
                                <use xlinkHref="#logo" />
                            </svg>
                            <div className="logo">🐟</div>
                            <span className="fs-4">KoiCare</span>

                        </a>
                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a href="#" className="nav-link px-3 text-dark link-hover">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3 text-dark link-hover">
                                    Service
                                </a>
                            </li>
                            <li>
                                <Link to={`/StandardCare`} className="nav-link px-3 text-dark link-hover">Standard Care </Link>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3 text-dark link-hover">
                                    FAQ's
                                </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-3 text-dark link-hover">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="col-md-3 text-end">
                            <Link to={`/login`} className="btn btn-outline-primary me-2 rounded-pill px-4">Login</Link>

                            <Link to={`/Sign-up`} className="btn btn-primary rounded-pill px-4">Sign-up</Link>


                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}

export default Header
import React from 'react'

function Footer() {
    return (
        <><div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 link-dark text-decoration-none"
                    >
                        <svg className="bi me-2" width={40} height={32}>
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </a>
                    <p className="text-light">© 2024 Your Company Name</p>
                </div>
                <div className="col mb-3">
                    <h5>Contact Us</h5>
                    <p className="text-light">info@example.com</p>
                    <p className="text-light">+1 (234) 567-8900</p>
                </div>
                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Home
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Features
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Documentation
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Support
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Terms of Service
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5>Follow Us</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Facebook
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Twitter
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                Instagram
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                LinkedIn
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-light">
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div></>
    )
}

export default Footer
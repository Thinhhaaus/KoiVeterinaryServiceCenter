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
                    <p className="text-muted">© 2024 Your Company Name</p>
                </div>
                <div className="col mb-3">
                    <h5>Contact Us</h5>
                    <p className="text-muted">info@example.com</p>
                    <p className="text-muted">+1 (234) 567-8900</p>
                </div>
                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Home
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Features
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Documentation
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Support
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Terms of Service
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col mb-3">
                    <h5>Follow Us</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Facebook
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Twitter
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                Instagram
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
                                LinkedIn
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="#" className="nav-link p-0 text-muted">
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
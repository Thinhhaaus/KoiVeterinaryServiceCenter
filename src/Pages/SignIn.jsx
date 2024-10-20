import React from 'react'

function SignIn() {
    return (
        <div><section className="vh-100" style={{ backgroundColor: "#110253" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://images.unsplash.com/photo-1618419125747-ee5a210c6ebe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i
                                                    className="fas fa-cubes fa-2x me-3"
                                                    style={{ color: "#ff6219" }}
                                                />
                                                <span className="h1 fw-bold mb-0">You're back!</span>
                                            </div>
                                            <h5
                                                className="fw-normal mb-3 pb-3"
                                                style={{ letterSpacing: 1 }}
                                            >
                                                Please fill in the information below to log in.
                                            </h5>
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form2Example17"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form2Example17">
                                                    Email
                                                </label>
                                            </div>
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form2Example27"
                                                    className="form-control form-control-lg"
                                                />
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <button
                                                    data-mdb-button-init=""
                                                    data-mdb-ripple-init=""
                                                    className="btn btn-dark btn-lg btn-block"
                                                    type="button"
                                                >
                                                    <a
                                                        href="./bootstrap-5-full-carousel-cover-template-main/Homepage.html"
                                                        style={{ color: "azure" }}
                                                    >
                                                        Login
                                                    </a>
                                                </button>
                                            </div>
                                            <a className="small text-muted" href="#!">
                                                Forgot password?
                                            </a>
                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                Don't have an account?{" "}
                                                <a href="#!" style={{ color: "#393f81" }}>
                                                    Sign in
                                                </a>
                                            </p>
                                            <a href="#!" className="small text-muted">
                                                Sign up here
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default SignIn
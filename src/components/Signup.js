import React from 'react'

export const Signup = () => {


    return (
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">
                        <div className="text-center mt-5">
                            <h1 className="h2" style={{ color: "#64ffda" }}>&Iacute;&Ntilde;otes</h1>
                            <p className="lead" style={{ color: "#64ffda" }}>
                                Welcome to iNote claoud based save Notes
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="m-sm-4" style={{ color: "#64ffda" }}>
                                    <form action="profile.html">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="form3Example1">Full name</label>
                                            <input className="form-control form-control-lg" style={{
                                                border: "none",
                                                borderBottom: "2px solid #64ffda", backgroundColor: "#0a192f", color: "#64ffda"
                                            }} type="text" name="name" placeholder="Full Name"
                                                required />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            <input className="form-control form-control-lg" style={{
                                                border: "none",
                                                borderBottom: "2px solid #64ffda", backgroundColor: "#0a192f", color: "#64ffda"
                                            }} type="email" name="email"
                                                placeholder="Email" required />
                                        </div>

                                        <div className="form-group">

                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input className="form-control form-control-lg" style={{
                                                border: "none",
                                                borderBottom: "2px solid #64ffda", backgroundColor: "#0a192f", color: "#64ffda"
                                            }} type="password" name="password"
                                                placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                                            <input className="form-control form-control-lg" style={{
                                                border: "none",
                                                borderBottom: "2px solid #64ffda", backgroundColor: "#0a192f", color: "#64ffda"
                                            }} type="password" name="password"
                                                placeholder="Confirm password" required />
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="submit" className="w-50 btn btn-lg" style={{ background: "#64ffda", color: "oa192f" }}>Sign Up</button>

                                        </div>
                                        <div className="text-center">
                                            {/* <p>or sign up with:</p> */}
                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-primary btn-floating mx-1">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

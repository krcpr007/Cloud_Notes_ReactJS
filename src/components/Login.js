import React from 'react';
import { Link } from 'react-router-dom';
export const Login = () => {
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
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" style={{
                                                border: "none",
                                                borderBottom: "2px solid #64ffda", backgroundColor: "#0a192f", color: "#64ffda"
                                            }} className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" style={{
                                                border: "none",
                                                borderBottom: "2px solid #64ffda", backgroundColor: "#0a192f", color: "#64ffda"
                                            }} className="form-control" placeholder="password" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <p>Don't have account  <Link style={{color:"#64ffda"}} to="/signup">Sign Up</Link> </p>
                                        <div className="text-center mt-3">
                                            <button type="submit" className="w-50 btn btn-lg" style={{ background: "#64ffda", color: "oa192f" }}>Log In</button>
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

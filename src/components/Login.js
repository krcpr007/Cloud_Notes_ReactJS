import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const host = "http://localhost:5000";
export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-5">
              <h1 className="h2" style={{ color: "#64ffda" }}>
                &Iacute;&Ntilde;otes
              </h1>
              <p className="lead" style={{ color: "#64ffda" }}>
                Welcome to iNote claoud based save Notes
              </p>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="m-sm-4" style={{ color: "#64ffda" }}>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        style={{
                          border: "none",
                          borderBottom: "2px solid #64ffda",
                          backgroundColor: "#0a192f",
                          color: "#64ffda",
                        }}
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        placeholder="Email"
                        aria-describedby="emailHelp"
                z      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        style={{
                          border: "none",
                          borderBottom: "2px solid #64ffda",
                          backgroundColor: "#0a192f",
                          color: "#64ffda",
                        }}
                        className="form-control"
                        placeholder="password"
                        value={credentials.password}
                        onChange={onChange}
                        name="password"
                        id="password"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                    <p>
                      Don't have account{" "}
                      <Link style={{ color: "#64ffda" }} to="/signup">
                        Sign Up
                      </Link>{" "}
                    </p>
                    <div className="text-center mt-3">
                      <button
                        type="submit"
                        className="w-50 btn btn-lg"
                        style={{ background: "#64ffda", color: "#a192f" }}
                      >
                        Log In
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
  );
};

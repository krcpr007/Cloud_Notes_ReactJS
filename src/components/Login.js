import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_PORT_VALUE}/api/auth/login`, {
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
      localStorage.setItem("auth-token", json.authToken);
      props.showAlert("Loged in Successfully", "success");
      history.push("/");
    } else {
      props.showAlert("Invalid Details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container login">
      <div className="row h-100">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-5">
              <h1 className="h1">&Iacute;&Ntilde;otes</h1>
              <p>Welcome to iNote claoud based save notes</p>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="m-sm-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                      Your Email 
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={onChange}
                        placeholder="Email"
                        aria-describedby="emailHelp"
                        z
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
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
                      <Link style={{ color: "#64ffda", textDecoration:"none" }} to="/signup">
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

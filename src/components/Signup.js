import React , {useState}from 'react';
import { Link, useHistory } from "react-router-dom";
export const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "" , cpassword:"",}) 
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
     const   {name,email,password}= credentials; 
        const response = await fetch(`${process.env.REACT_APP_PORT_VALUE}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('auth-token', json.authToken); 
            props.showAlert("Account Created Successfully","success");
            history.push("/");

        }else{
            props.showAlert("Sorry a user with this email already exists","danger");
            // showAlert={showAlert}
        }
       
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className="container Signup">
            <div className="row h-100">
                <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">
                        <div className="text-center mt-5">
                            <h1 className="h2" >&Iacute;&Ntilde;otes</h1>
                            <p className="lead" >
                                Welcome to iNote claoud based save Notes
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="m-sm-4" >
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full name</label>
                                            <input className="form-control form-control-lg"  type="text" name="name" onChange={onChange} placeholder="Full Name"
                                                required  />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email address</label>
                                            <input className="form-control form-control-lg"  type="email" name="email"
                                                placeholder="Email" onChange={onChange} required />
                                        </div>

                                        <div className="form-group">

                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input className="form-control form-control-lg"  type="password" name="password"
                                                placeholder="Password" onChange={onChange} required minLength={5} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="cpassword">Confirm Password</label>
                                            <input className="form-control form-control-lg"  type="password" name="cpassword"
                                                placeholder="Confirm password" onChange={onChange} required />
                                        </div>
                                        <div className="text-center mt-3">

                                            <button type="submit"  className="w-50 btn btn-lg icon" >Sign Up</button>
                                            <p>Already have an account? <Link style= {{ color: "#64ffda", textDecoration:"none" }} to="/login">Login</Link> </p>

                                        </div>
                                        <div className="text-center mt-3">
                                            
                                            <button type="button"  className="btn  btn-floating btn-outline-dark mx-2 icon">
                                                <i className="fab fa-facebook-f" ></i>
                                              
                                            </button>

                                            <button type="button"  className="btn  btn-outline-dark  btn-floating mx-2 icon">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button"  className="btn btn-outline-dark  btn-floating mx-2 icon">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button"  className="btn btn-outline-dark  btn-floating mx-2 icon">
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

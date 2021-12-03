import React from 'react'
import {Link , useHistory} from "react-router-dom";

export const Navbar = () => {
  let history = useHistory();
  const handleLogout =()=>{
    localStorage.removeItem('auth-token'); 
    history.push('/login');
  }
  return (

      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-1 `}>
        <div className=" container container-fluid">
          <Link className="navbar-brand" style={{ color: "#64ffda" }} to="/">&Iacute;&Ntilde;otes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" style={{ color: "#64ffda" }} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: "#64ffda" }} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('auth-token')?<form className="d-flex">
            <Link className="btn " style={{ color: "#64ffda", background: "#0a192f" }} to="/login">Login</Link>
            <Link className="btn mx-2" style={{ color: "#64ffda", background: "#0a192f" }} to="/signup">Signup</Link>
            </form>:
            // <button className="btn " onClick={handleLogout} style={{ color: "#64ffda", background: "#0a192f" }} >Log out</button>}
           ( <ul className="navbar-nav mb-2 mb-lg-0 profile-pic">
            <li className="nav-item dropdown me-auto">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://avatars.githubusercontent.com/u/80947662?v=4" alt="profile-img" width="40" height="40" className="rounded-circle"/>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><p className="dropdown-item" >Rajan kumar</p></li>
                    <li><p className="dropdown-item" >No of Notes</p></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><p className="dropdown-item" style={{cursor:"pointer"}} onClick={handleLogout}>Log Out</p></li>
                  </ul>
                </li>
            </ul>)}
          </div>
        </div>
      </nav>
    
  )
}

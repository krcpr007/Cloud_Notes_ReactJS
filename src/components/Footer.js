import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div>
            <footer className="footer text-center text-lg-start mt-5" >
        {/* <!-- Grid container --> */}
            <div className ="footer container p-4">
        {/* <!--Grid row--> */}
            <div className ="row">
        {/* <!--Grid column--> */}
            <div className ="footer col-lg-6 col-md-12 mb-4 mb-md-0">
            <h3 className ="">&Iacute;&Ntilde;otes</h3>

            <p style={{textAlign:"justify"}}>
            Hii..., A very Welcome to all of you at ÍÑotes. This is an online note-taking web app. Its made with help of MERN full stack as well as for UI we take the help of BOOTSTRAP. 
            Basically, it's a cloud-based note-taking web app where you can note down your important notes and save them to the cloud it is fully secure to use nobody can see your Notes.
            </p>
            </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
            <div className ="footer col-lg-6 col-md-12 mb-4 mb-md-0">
            <h3 >Contact Us</h3>

            
                <ul>
                    <li>
                        <p> Rajan Kumar</p>
                    </li>
                    <li>
                        <a href="mailto:rajankk.ug20.cse@nitp.ac.in">Email</a>
                    </li>
                </ul>
            
           <div className="container">
           <a href="https://facebook.com" role="button" style={{fontSize:"10px"}} target="_blank" rel="noreferrer"  className="btn  btn-floating btn-outline-dark mx-2 icon">
                <i className="fab fa-facebook-f" ></i>
                                              
            </a>

            <a role="button" href="/" style={{fontSize:"10px"}} target="_blank" rel="noreferrer" className="btn  btn-outline-dark  btn-floating mx-2 icon">
            <i className="fab fa-google"></i>
             </a>

            <a role="button" href="/" style={{fontSize:"10px"}} target="_blank" rel="noreferrer" className="btn btn-outline-dark  btn-floating mx-2 icon">
                <i className="fab fa-twitter"></i>
            </a>

           <a role="button" href="https://github.com/krcpr007/Cloud_Notes" target="_blank" rel="noreferrer"   style={{fontSize:"10px"}} className="btn btn-outline-dark  btn-floating mx-2 icon">
            <i className="fab fa-github"></i>
            </a>
           </div>
            </div>
        {/* <!--Grid column--> */}
            </div>
        {/* <!--Grid row--> */}
            </div>
        {/* <!-- Grid container --> */}
            <div className ="container p-4 pb-0">
        {/* <!-- Section: CTA --> */}
            <section className ="">
            {!localStorage.getItem('auth-token')?<p className ="d-flex justify-content-center align-items-center">
            <span className ="me-3">Register for free</span>
            <Link type ="button" className ="btn btn-outline-dark rounded-pill " to="/signup" style={{background: "#64ffda", color: "#0a192f"}}>
            Sign up!</Link></p>:null}
            </section>
        {/* <!-- Section: CTA --> */}
            </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
            <div className ="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2021 Copyright:
            <a style={{color:"white", textDecoration:"none"}} href="https://www.linkedin.com/in/krcpr007/" target="_blank" rel="noreferrer" > Rajan Kumar</a>
            </div>
        {/* <!-- Copyright --> */}
            </footer>
        {/* <!-- Footer --> */}
            {/* </section> */}


        </div>
    )
}

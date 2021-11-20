import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <div>
            <footer className="footer text-center text-lg-start mt-5" style={{ background: "#64ffda", color: "#0a192f" }}>
        {/* <!-- Grid container --> */}
            <div className ="footer container p-4">
        {/* <!--Grid row--> */}
            <div className ="row">
        {/* <!--Grid column--> */}
            <div className ="footer col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className ="">iNote</h5>

            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iste atque ea quis
            molestias.Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
            </p>
            </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
            <div className ="footer col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className ="text-uppercase">Footer text</h5>

            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Iste atque ea quis
            molestias.Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint!
            </p>
            </div>
        {/* <!--Grid column--> */}
            </div>
        {/* <!--Grid row--> */}
            </div>
        {/* <!-- Grid container --> */}
            <div className ="container p-4 pb-0">
        {/* <!-- Section: CTA --> */}
            <section className ="">
            <p className ="d-flex justify-content-center align-items-center">
            <span className ="me-3">Register for free</span>
            <Link type ="button" className ="btn btn-outline-dark btn-rounded " to="/signup" style={{background: "#64ffda", color: "#0a192f"}}>
            Sign up!
            </Link>
            </p>
            </section>
        {/* <!-- Section: CTA --> */}
            </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
            <div className ="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2020 Copyright:
            <Link style={{color:"#0a192f"}} to="">Rajan Kumar</Link>
            </div>
        {/* <!-- Copyright --> */}
            </footer>
        {/* <!-- Footer --> */}
            {/* </section> */}


        </div>
    )
}

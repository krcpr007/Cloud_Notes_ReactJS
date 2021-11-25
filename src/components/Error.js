import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Error extends Component {
    render() {
        return (
            <div  className="container">
                <div className="Error-page">
                <h1>Error!!</h1>
                <h1>404</h1> Page does not exist...
                <Link style={{textDecoration:"none", color:"#64ffda"}} to="/">Go to Home</Link>
                </div>
            </div>
        )
    }
}
 
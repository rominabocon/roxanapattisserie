import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import {CartWidget} from "../CartWidgets/CartWidgets.jsx"

export const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img className="logo" src="/media/logo.png" alt="Logo"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Tortas">Tortas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Cupcake">Cupcakes</Link>
                </li>
            </ul>
            </div>
            <CartWidget />
        </div>
        </nav>
    )
}

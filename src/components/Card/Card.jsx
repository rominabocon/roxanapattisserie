import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export const Card = ({img, description, price, sabor, id, name}) => {
    return (

    <div className="card mb-5" style={{width: "20rem"}}>
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
        <h5 className="card-title">{description}</h5>
        <p className="card-text">{sabor}</p>
        <p className="card-text">${price}</p>
        <Link to={`/producto/${id}`} className="btn btn-primary">Ver Detalles</Link>
        </div>
    </div>
    )
}

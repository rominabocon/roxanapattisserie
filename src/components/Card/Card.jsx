import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export const Card = ({img, description, price, sabor, id, name}) => {



    return (

    <div className="card mb-5" style={{width: "20rem"}}>
        <img src={img} className="card-img-top" alt={name}/>
        <div className="card-body">
        <h5 className="card-title fs-4">{description}</h5>
        <p className="card-text fs-4">{sabor}</p>
        <p className="card-text fs-3">${price}</p>
        <Link to={`/producto/${id}`} className="btn btn-primary fs-5">Ver Detalles</Link>
        </div>
    </div>
    )
}

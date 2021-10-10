import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ItemContext } from '../../context/ItemContext'


export const Cart = () => {

    const {carrito} = useContext (ItemContext);
    const totalFinal = [];
    
    return (
        <div className="text-center">
            <h1 className="my-4 fst-italic fw-light text-decoration-underline">Detalle de su Carrito</h1>
            <table className="table ">
            <thead>
                                <tr>
                                    <th scope="col">Id Producto</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Precio Final</th>
                                </tr>
                            </thead>
                {carrito.length === 0 ? (
                                        <p className="fs-5">No hay nada por aquí...</p>
                                        ) : (
                    carrito.map(item=> { 
                        const total = item.price * item.cantidad
                        totalFinal.push(total);
                        return(
                            <>
                            <tbody>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.description}</td>
                                <td>{item.cantidad}{item.key}</td>
                                <td>${item.price}</td>
                                <td>${total}</td>
                            </tr>
                                </tbody>
                                </>                                
                        );
                            })
                                        )}
            </table>
            <h3 className="text-end me-5 fs-1">Total: ${totalFinal.reduce((prev,next) => prev + next,0)}</h3> 
            <Link to={"/"} className="btn btn-primary fs-5">Volver al Inicio</Link>
        </div>
    )

}





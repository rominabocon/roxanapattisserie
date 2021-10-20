import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ItemContext } from '../../context/ItemContext'
import "./Cart.css"
import { useHistory } from "react-router"


export const Cart = () => {

    const {carrito, setCarrito} = useContext (ItemContext);
    const totalFinal = [];

    const [obtenerForm, setObtenerForm] = useState (false);
    const obtener = () => setObtenerForm(true);
    const cancelar = () => setObtenerForm(false);

    const history = useHistory();
    
    const handleDelete = (id) => {
        setCarrito(carrito.filter(item=> item.id !== id));
    }

    const handleAdd = (id) => {
        let sumando = carrito.map(item => item.id === id ? {...item, cantidad:item.cantidad+1}: item);
        setCarrito(sumando);
    }
    
    const handleSubs = (id) => {
        const cart = [];
        carrito.map (item => {
            if(item.id === id && item.cantidad > 1) {
                cart.push({...item, cantidad:item.cantidad - 1});
            }
            else if (item.id !== id){
                cart.push(item);
            }
            return (
                console.log("all good")
            )
        });
        setCarrito(cart)
    }

    const { register, handleSubmit, formState: {errors} } = useForm();

    return (
        <div className="text-center">
            <h1 className="my-4 fst-italic fw-light text-decoration-underline">Detalle de su Carrito</h1>
            <table className="table ">
            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">-/+</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Precio Final</th>
                                    <th scope="col">Eliminar</th>
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
                                <td>
                                    <button onClick={() => handleSubs(item.id)} className="btn btn-danger m-1">-</button>
                                    <button onClick={() => handleAdd(item.id)} className="btn btn-success">+</button>
                                </td>
                                <td>${item.price}</td>
                                <td>${total}</td>
                                <td onClick={() => handleDelete(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </td>
                            </tr>
                                </tbody>
                                </>                                
                        );
                            })
                                        )}
            </table>
            <h3 className="text-end me-5 fs-1">Total: ${totalFinal.reduce((prev,next) => prev + next,0)}</h3> 
            <Link to={"/"} className="btn btn-primary fs-5">Volver al Inicio</Link>
        <form  className="form-container">
            <div className="mb-3">
        <label className="form-label" htmlFor="nombre">NOMBRE(*)</label> 
        <input className="form-control" type="text" id="nombre" {...register("nombre", {required: "*Campo Obligatorio"})} />
        {errors.nombre && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
        </div>
        <div className="mb-3">
        <label className="form-label" htmlFor="apellido">APELLIDO(*)</label> 
        <input className="form-control" type="text" id="apellido" {...register("apellido", {required: "*Campo Obligatorio"})} />
        {errors.apellido && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
        </div>
        <div className="mb-3">
        <label className="form-label" htmlFor="telefono">TELEFONO(*)</label> 
        <input className="form-control" type="phone" id="telefono"{...register("telefono", {required: "*Campo Obligatorio"})} />
        {errors.telefono && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
        </div>
        <div className="mb-3">
        <label className="form-label" htmlFor="email">EMAIL(*)</label> 
        <input className="form-control" type="email" id="email" {...register("email", {required: "*Campo Obligatorio"})} />
        {errors.email && <p className="text-obligatory">CAMPO OBLIGATORIO</p>}
        </div>
        <button type= "button"className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" >ENVIAR</button>
       
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Gracias por contactarnos.</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            En breve estaremos comunicandonos contigo.
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
    </div>
</div>
        <h6 className="camposRequeridos">(*) CAMPOS REQUERIDOS</h6>
        
    </form>
    </div>

    )}





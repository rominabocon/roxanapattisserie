import React, {useContext} from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom";
import { ItemContext } from '../../context/ItemContext';
import {ItemCount} from "../ItemCount/ItemCount"
import {useGetItems} from "../../hooks/useGetItems.jsx"
import "./ItemDetail.css"

export const ItemDetail = () => {

    const {id} = useParams();
    const {loading, productos: item} = useGetItems(id,)

    const {carrito, setCarrito} = useContext (ItemContext);


    let path= '/';

    if(item.description === "Cupcake") {
        path='/Cupcake'
    }else {
        path='/Tortas'
    }



    const addItem = (cantidad) => {
        const itemConCantidad = {...item, cantidad};
        let cart = [];

        let existCart = carrito.find (item=>item.id === id);
        if(existCart) {
            cart = carrito.map((item) => item.id === id ? {...item, cantidad: item.cantidad + cantidad} : item);
        }
        else {
            cart = [...carrito, itemConCantidad];
        }
        setCarrito (cart);
    }


    return (
        <>
        {
            loading ? (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            )
            :
            (<div className="contenedor">
            <div>
            <h1 className="fs-1 fw-light my-4">{item.description}</h1>
            <hr />
            </div>
            <div>
            <div>
                <img  className="detalleImg" src={item.img} alt={item.name}/>
            </div>
            <h3 className="mt-1">Sabor: </h3>
            <p className="fst-italic fs-3"> {item.sabor}</p>
            <p  className="fs-1 fw-bolder">${item.price}</p>
            </div>
            <ItemCount onAdd={addItem}/>
            <div className="d-flex justify-content-evenly mb-3">
            <Link className="btn btn-dark mt-3" to={path}>Volver</Link>
            <Link className="btn btn-secondary mt-3" to={"/cart"}>Terminar Compra</Link>
            </div>
        </div>
            )
        }
        </>  
        )
            }
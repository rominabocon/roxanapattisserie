import React, { useContext } from 'react'
import { ItemContext } from '../../context/ItemContext'

export const Cart = () => {

    const {carrito} = useContext (ItemContext);
    const totalFinal = [];
    return (
        <div>
            <h1>Detalle</h1>
            <ul>
                {
                    carrito.map(item=> {

                        const total = item.price * item.cantidad
                        totalFinal.push(total);
                        return(
                        <li>
                            {item.description} Cantidad:  {item.cantidad} Precio: ${item.price} ${total}
                            </li>
                        );
                            })
                }
            </ul>
            <h3>Total: ${totalFinal.reduce((prev,next) => prev + next)}</h3>
        </div>
    )
}

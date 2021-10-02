import React, {useContext} from 'react'
import { useParams } from 'react-router'
import { ItemContext } from '../../context/ItemContext';
import { getElementbyId } from '../../utils/getElementById';
 import {ItemCount} from "../ItemCount/ItemCount"

export const ItemDetail = () => {

    const {id} = useParams();
    const item = getElementbyId(parseInt(id));

    const {setCarrito} = useContext (ItemContext);

    const addItem = (cantidad) => {
        const itemConCantidad = {...item, cantidad};
        setCarrito (prev => {
            return [...prev, itemConCantidad]
        });
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <h2>${item.price}</h2>
            <ItemCount onAdd={addItem}/>
        </div>
    )
}

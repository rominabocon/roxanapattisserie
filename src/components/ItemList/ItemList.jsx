import React from 'react'
import { getCategoria } from '../../utils/getCategorias.jsx';
import {Card} from "../Card/Card.jsx"
import "./ItemList.css"

export const ItemList = ({description}) => {
    const productos = getCategoria(description);
    return (
        <div className="item-container">
            
            {productos.map((el) => {
                return(
            <Card 
            description={el.description}
            img={el.img}
            sabor={el.sabor}
            id={el.id}
            key={el.id}
            price={el.price}
            name={el.name}
            stock={el.stock}
            />
            )
                })}
            
        </div>
    );
};

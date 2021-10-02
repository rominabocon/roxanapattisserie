import React from 'react'
import {data} from "../../data/data.js"
import {Card} from "../Card/Card.jsx"
import "./ItemList.css"

export const ItemList = () => {
    return (
        <div className="item-container">
            {data.map((el) => (
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
            ))}
        </div>
    );
};

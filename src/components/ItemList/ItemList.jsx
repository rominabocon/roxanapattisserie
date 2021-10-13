import React from 'react'
import {Card} from "../Card/Card.jsx"
import "./ItemList.css"
import {useGetItems} from "../../hooks/useGetItems.jsx"

export const ItemList = () => {

    const {loading, productos} = useGetItems();


    return (
        <>
        {
            loading ? <div className="spinner-border" role="status"> 
            <span className="visually-hidden">Loading...</span>
            </div>
            :
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
        }
        
        </>
    );
};

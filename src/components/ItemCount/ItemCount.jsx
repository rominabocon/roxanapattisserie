import React,{useState} from 'react'

export const ItemCount = ({onAdd}) => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }
    const restar = () => {
        setContador(contador - 1);
    }
    
    return (
        <div className="buttons">
            <button className="btn btn-dark me-3" onClick={restar}>-</button> 
            <span>{contador}</span>
            <button className="btn btn-dark ms-3" onClick={sumar}>+</button>
            <button className="btn btn-dark ms-3" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
        </div>
    )
}

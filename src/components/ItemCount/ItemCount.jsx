import React,{useState} from 'react'

export const ItemCount = ({onAdd}) => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    }
    const restar = () => {
        if(contador===0){
            return;}
        setContador(contador - 1);
    }
    
    return (
        <div className="buttons fs-3">
            <button className="btn btn-dark me-3" onClick={restar}>-</button> 
            <span>{contador}</span>
            <button className="btn btn-dark ms-3" onClick={sumar}>+</button>
            <div className="m-3">
            <button className="btn btn-primary ms-6" onClick={() => onAdd(contador)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

import { ItemList } from "../ItemList/ItemList"


export const PaginaInicio = () => {
    return (
        <div id="paginaInicio" className="text-center">
            <h1>Nuestras Variedades</h1>
            <hr/>
            <div className="inicio">
            <ItemList description= "Cupcake" />
            <ItemList description= "Torta" />
            </div>
        </div>
    )
}
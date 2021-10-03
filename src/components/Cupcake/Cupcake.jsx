import { ItemList } from "../ItemList/ItemList"

export const Cupcake = () => {
    return (
        <div className="container mt-3 text-center">
            <h1>Cupcakes</h1>
            <hr/>
            <ItemList description= "Cupcake" />
        </div>
    )
}
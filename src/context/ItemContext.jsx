import { createContext } from "react";

export const ItemContext = createContext();
const {Provider} = ItemContext

export const CustomProvider = ({children}) => {
    return(
        <Provider>
            {children}
        </Provider>
    )
}
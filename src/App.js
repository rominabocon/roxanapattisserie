import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import {ItemContext} from "./context/ItemContext.jsx"
import {useState} from "react"
import { CartContext } from './context/CartContex';

function App() {

  const [carrito, setCarrito] = useState([]);
  const [numeroCarrito, setNumeroCarrito] = useState (0);
  
  return (
          <>
            <CartContext.Provider value={{numeroCarrito, setNumeroCarrito}}>
            <ItemContext.Provider value={{carrito, setCarrito}}>
            <AppRoutes />
            </ItemContext.Provider>
            </CartContext.Provider>
          </>
  );
}

export default App;

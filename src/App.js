import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import {ItemContext} from "./context/ItemContext.jsx"
import {useState} from "react"

function App() {

  const [carrito, setCarrito] = useState([]);

  
  return (
          <>

            <ItemContext.Provider value={{carrito, setCarrito}}>
            <AppRoutes />
            </ItemContext.Provider>

          </>
  );
}

export default App;

import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import {ItemContext} from "./context/ItemContext.jsx"
import {useState} from "react"
import {CustomProvider} from "./context/ItemContext.jsx"

function App() {

  const [carrito, setCarrito] = useState([]);

  
  return (
          <>
            <CustomProvider>
            <ItemContext.Provider value={{carrito, setCarrito}}>
            <AppRoutes />
            </ItemContext.Provider>
            </CustomProvider>
          </>
  );
}

export default App;

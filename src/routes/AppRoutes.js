import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import {Cart} from "../components/Cart/Cart.jsx"
import {ItemDetail} from "../components/ItemDetail/ItemDetail.jsx"
import {Navbar} from "../components/Navbar/Navbar.jsx"
import { PaginaInicio } from "../components/Inicio/paginaInicio.jsx";
import { Cupcake } from "../components/Cupcake/Cupcake.jsx";
import { Tortas } from "../components/Tortas/Tortas.jsx";

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={PaginaInicio}/>
                    <Route path="/Cupcake" exact component={Cupcake}/>
                    <Route path="/Tortas" exact component={Tortas}/>
                    <Route path="/producto/:id" component={ItemDetail}/>
                    <Route path="/cart" exact component={Cart}/>
                    
                </Switch>
            </Router>
        </div>
    )
}

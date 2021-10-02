import React from "react";
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import {Cart} from "../components/Cart/Cart.jsx"
import {ItemList} from "../components/ItemList/ItemList.jsx"
import {ItemDetail} from "../components/ItemDetail/ItemDetail.jsx"
import {Navbar} from "../components/Navbar/Navbar.jsx"

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/producto/:id" component={ItemDetail}/>
                    <Route path="/" component={ItemList}/>
                </Switch>
            </Router>
        </div>
    )
}

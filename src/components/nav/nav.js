import React from "react";
import "./nav.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import CartNavigation from "../sidecart/cartnavigation";


export default function Nav({ toggleCart, cartNav }) {
    return (
    <nav className="navigation-container">
        <h1>Ecommerce UI</h1>
        <AiOutlineShoppingCart  size={40}className="cart-button" onClick={toggleCart}></AiOutlineShoppingCart>
        <CartNavigation
            cartNav={cartNav}
        ></CartNavigation>
    </nav>
    )
}
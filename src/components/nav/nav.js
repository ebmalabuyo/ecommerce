import React from "react";
import "./nav.css"
import { AiOutlineShoppingCart } from "react-icons/ai"


export default function Nav({ toggleCart }) {
    return (
    <nav className="navigation-container">
        <h1>Ecommerce UI</h1>
        <AiOutlineShoppingCart  size={40}className="cart-button" onClick={toggleCart}></AiOutlineShoppingCart>
    </nav>
    )
}
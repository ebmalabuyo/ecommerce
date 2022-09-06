import React from "react";
import "./nav.css"


export default function Nav({ toggleCart }) {
    return (
    <nav className="navigation-container">
        <h1>Ecommerce</h1>
        <button className="cart-button" onClick={toggleCart}>CART</button>
    </nav>
    )
}
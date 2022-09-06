import React from "react";
import "./cart.css"

const Cart = ({image, title, price, removeItem, id, updateItemQuantity, quantity}) => {
    return(
        <div className="cart-item">
            <div>
                <img className= "cart-img" src={image} alt=''></img>
            </div>
            <p>{title}</p>
            <h3>{price}</h3>
            <button
              onClick={() => updateItemQuantity(id, quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(id, quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    )
}
export default Cart
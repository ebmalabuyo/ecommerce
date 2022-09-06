import React from "react";
import "./cart.css"

const Cart = ({image, title, price, removeItem, id, updateItemQuantity, quantity}) => {
    return(
        <div className="cart-item">
            <div>
                <img className= "cart-img" src={image} alt=''></img>
            </div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <button
              onClick={() => updateItemQuantity(id, quantity - 1)}
            >
              -
            </button>
            <p>{quantity}</p>
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
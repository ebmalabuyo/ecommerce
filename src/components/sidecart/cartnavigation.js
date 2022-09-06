import React from "react";
import Cart from "./cart";
import {useCart} from "react-use-cart"

const CartNavigation = ({cartNav}) => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();

    let dollarUSLocale = Intl.NumberFormat('en-US',  {
        style: "currency",
        currency: "USD",
    });


    return(
        <div className= {cartNav === true ? "cart-navigation active" : "cart-navigation notactive"}>
            <h2>{totalUniqueItems}</h2>
            <div className="cart-list">
          {isEmpty ? "Your Cart is Empty" : items.map(each => {
            return(
              <Cart
              id = {each.id}
              title = {each.title}
              image = {each.image}
              price = {dollarUSLocale.format(each.price)}
              removeItem = {removeItem}
              updateItemQuantity = {updateItemQuantity}
              quantity = {each.quantity}
              />
            )
          })}
          </div>
          <div className="cart-summary">
            <h2>Total: {cartTotal}</h2>
          </div>
      </div>
    )
}

export default CartNavigation
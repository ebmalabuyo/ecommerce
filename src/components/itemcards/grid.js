import React from "react";
import './card.css'
import { useCart } from "react-use-cart";

const Grid = ({loading, data, addToCart}) => {
    let dollarUSLocale = Intl.NumberFormat('en-US',  {
        style: "currency",
        currency: "USD",
    });

    const { addItem } = useCart();

    return( 
        <div className="grid">
        {loading === false && 
          data.map(item => {
            return (
                <div className= 'card-container'>
                <div className="img-container">
                <img className= 'card-img'src={item.image} alt=''></img>
                </div>
                <div className="card-description">
                    <h2 className= 'card-title'>{item.title}</h2>
                    <p className= ''>{dollarUSLocale.format(item.price)}</p>
                    <button className="add-item" onClick={() => addItem(item)}>Add to Cart</button>
                </div>
            </div>
                )
              }
            )
          }
        </div>
    )
}

export default Grid
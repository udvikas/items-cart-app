import React from 'react'
import { useCart } from './Context/CartContext'

const Item = (props) => {

    const cartCtx = useCart()
  return (
    <div>
      <h4>{props.name}</h4>
      <p> ${props.price}</p>
      <button onClick={() => cartCtx.setItems([...cartCtx.items, {name: props.name, price:props.price} ])}>Add to Cart</button>
    </div>
  )
}

export default Item

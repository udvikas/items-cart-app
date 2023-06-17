import React from 'react'
import { useCart } from './Context/CartContext';

const Cart = () => {
    const Cart = useCart();
    console.log('Cart', Cart);
    const total = Cart.items.reduce((a, b) => a + b.price, 0)
  return (
    <div>
      <h5>{Cart && Cart.items.map((item,index) => <li key={index}>{item.name} - {item.price}</li>)}</h5>
      <h6>Total Bill ${total}</h6>
    </div>
  )
}

export default Cart

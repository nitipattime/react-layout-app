import React from 'react'
import CartItems from './CartItems'

const test = () => {
    return "bill"
}
const Cart = () => {
  return (
    <div>
      <CartItems name="banana" price="30" qty="2" />
      <CartItems name={test()} price="40" qty="4" />
    </div>
  )
}

export default Cart


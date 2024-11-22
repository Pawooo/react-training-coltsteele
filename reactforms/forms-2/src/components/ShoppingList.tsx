import React from 'react'

const ShoppingList = ({ items }) => {
  return (
    items.map(i => <p>{i.product} {i.quantity}</p>)
  )
}

export default ShoppingList
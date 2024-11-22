import React from 'react'
import FormItem from '../components/FormItem';
import { useState } from 'react';
import ShoppingList from '../components/ShoppingList';

const ShoppingListForm = () => {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [items, setItems] = useState([]);

  function handleChange(e) {
    // console.log(e.target.value);
    setFormData(currData => {
      return {...currData, [e.target.name]: e.target.value}
    })
  }

  // const addToCart = () => {
  //   else.preventDefault();

  //   setFormData(currData => {
  //     return {...currData, }
  //   })
  // }

  const handleSubmit = (e) => {
    console.log("fired");
    e.preventDefault();
    setItems(i => [...i, formData]);
  }

  return (
    <section>
      <header><h1>Form</h1></header>
      <main>
      <form action="submit" onSubmit={handleSubmit}>
        <FormItem label="product" onChange={handleChange} ></FormItem>
        <FormItem label="quantity" onChange={handleChange} ></FormItem>
        <button>Submit</button>
      </form>
      <ShoppingList items={items} />
      </main>

    </section>
  )
}

export default ShoppingListForm
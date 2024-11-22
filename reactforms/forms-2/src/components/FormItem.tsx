import React from 'react'

const FormItem = ({ label, onChange }) => {
  return (
    <div className='flex'>
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder="product name" name={label} id={label} onChange={onChange} />
    </div>
  )
}

export default FormItem
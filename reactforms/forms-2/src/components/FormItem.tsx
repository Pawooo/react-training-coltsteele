import React from 'react'

const FormItem = ({ label, onChange, value, type }) => {
  return (
    <div className='flex'>
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} placeholder="product name" name={label} id={label} onChange={onChange} />
    </div>
  )
}

export default FormItem
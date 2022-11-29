import React from 'react'

const quoteForm = () => {
  return (
    <div className='quote-form'>
      <h1>Get a free quote</h1>
      <input type='text' placeholder='First Name' />
      <input type='text' placeholder='Last Name' />
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Phone' />
      <input type='text' placeholder='Procedure' />
      <input type='text' placeholder='Zip Code' />
      <button className='btn'>Get a free quote</button>
    </div>
  )
}

export default quoteForm
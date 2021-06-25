import { useState } from 'react'
import useForm from '../lib/use-form'

const CreateProduct: React.FC = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    name: 'shoes',
    price: 6456457,
    description: 'nice one'
  })

  return (
    <div>
      <label htmlFor='name'>
        name
        <input
          type='text'
          id='name'
          name='name'
          placeholder='name'
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='price'>
        price
        <input
          type='number'
          id='price'
          name='price'
          placeholder='price'
          value={inputs.price}
          onChange={handleChange}
        />
      </label>

      <button type='button' onClick={clearForm}>
        clear form
      </button>
      <button type='button' onClick={resetForm}>
        reset form
      </button>
    </div>
  )
}

export default CreateProduct

import { useState } from 'react'
import useForm from '../lib/use-form'
import Form from './styles/Form'

const CreateProduct: React.FC = () => {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'shoes',
    price: 6456457,
    description: 'nice one'
  })

  return (
    <Form
      onSubmit={e => {
        e.preventDefault()
        console.log(inputs)
      }}
    >
      <fieldset>
        <label htmlFor='image'>
          Image
          <input required type='file' id='image' name='image' onChange={handleChange} />
        </label>
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
        <label htmlFor='description'>
          Description
          <textarea
            id='description'
            name='description'
            placeholder='Description'
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type='submit'>+ Add Product</button>
      </fieldset>
    </Form>
  )
}

export default CreateProduct

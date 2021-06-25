import { useState } from 'react'

interface Inputs {
  name?: string
  price?: number
  description?: string
}

const useForm = (initial = {}) => {
  // create a state object for our inputs
  const [inputs, setInputs] = useState<Inputs>(initial)

  function handleChange(e) {
    let { value, name, type } = e.target
    if (type === 'number') value = parseInt(value)
    if (type === 'file') value[0] = e.target.files

    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value
    })
  }

  function resetForm() {
    setInputs(initial)
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']))
    setInputs(blankState)
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  }
}

export default useForm

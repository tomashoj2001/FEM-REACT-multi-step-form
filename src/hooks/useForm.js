export const useForm = (form, setForm, setErrors, validateForm) => {
  const handleChange = e => {
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = e => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  return { handleChange, handleBlur }
}
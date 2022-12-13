import { useForm } from "../hooks/useForm"
import "./Info.css"

const initialForm = {
  name: "",
  email: "",
  phone: ""
}

const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  if (!form.name.trim()) {
    errors.name = "The field 'Name' is required"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The field 'Name' only accepts letters and white spaces"
  }

  if (!form.email.trim()) {
    errors.email = "The field 'Email' is required"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The field 'Email' is incorrect"
  }

  if (!form.phone.trim()) {
    errors.phone = "The field 'Phone number' is required"
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "The field 'Phone number' only accepts numbers"
  }

  return errors
}

export default function Info() {
  const {
    form, 
    errors,
    handleChange, 
    handleBlur
  } = useForm(initialForm, validationsForm)

  return(
    <>
      <h1 className="title">Personal info</h1>
      <p className="description">Please provide your name, email address and phone number.</p>

      <form className="info__form">
        <div className="info__flex">
          <label htmlFor="name">Name</label>
          {errors.name && <p className="value-error">{errors.name}</p>}
        </div>
        <input
          className={errors.name ? "input-error" : ""}
          type="text"
          id="name" 
          name="name" 
          placeholder="e.g. Stephen King"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name} 
          required 
        />
        
        <div className="info__flex">
          <label htmlFor="email">Email Address</label>
          {errors.email && <p className="value-error">{errors.email}</p>}
        </div>
        <input
          className={errors.email ? "input-error" : ""}
          type="email"
          id="email" 
          name="email" 
          placeholder="e.g. stephemling@lorem.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email} 
          required 
        />

        <div className="info__flex">
          <label htmlFor="phone">Phone Number</label>
          {errors.phone && <p className="value-error">{errors.phone}</p>}
        </div>
        <input
          className={errors.phone ? "input-error" : ""}
          type="number"
          id="phone" 
          name="phone" 
          placeholder="e.g. +1 234 567 890"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.phone} 
          required 
        />
      </form>
    </>
  )
}


// import { useState } from "react"
// import "./Info.css"

// let initialForm = {
//   name: "",
//   email: "",
//   phone: ""
// }

// export default function Info() {
//   const [form, setForm] = useState(initialForm)
//   const [errors, setErrors] = useState({})

//   const handleBlur = (e) => {
//     const {name, value} = e.target
//     setForm({
//       ...form,
//       [name]: value
//     })
//   }

//   return(
//     <>
//       <h1 className="title">Personal info</h1>
//       <p className="description">Please provide your name, email address and phone number.</p>
//       <form className="info__form">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name" 
//           name="name" 
//           placeholder="e.g. Stephen King"
//           onBlur={handleBlur}
//           value={form.name}
//           required
//         />
        
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email" 
//           name="email" 
//           placeholder="e.g. stephemling@lorem.com"
//           onBlur={handleBlur}
//           value={form.email}
//           required
//         />

//         <label htmlFor="phone">Phone Number</label>
//         <input
//           type="number"
//           id="phone" 
//           name="phone" 
//           placeholder="e.g. +1 234 567 890"
//           onBlur={handleBlur}
//           value={form.number}
//           required
//         />
//       </form>
//     </>
//   )
// }
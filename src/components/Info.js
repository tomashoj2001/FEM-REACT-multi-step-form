import "./Info.css"

export default function Info() {
  return(
    <>
      <h1 className="title">Personal info</h1>
      <p className="description">Please provide your name, email address and phone number.</p>
      <form className="info__form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name" 
          placeholder="e.g. Stephen King"
        />
        
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email" 
          placeholder="e.g. stephemling@lorem.com"
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="number" 
          placeholder="e.g. +1 234 567 890"
        />
      </form>
    </>
  )
}
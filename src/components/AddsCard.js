import { useEffect } from "react"


export default function AddsCard ({content, timeframe, adds, setAdds}) {  
  useEffect(() => {
    const add = [...document.querySelectorAll('.add')]
    const checkbox = [...document.querySelectorAll('.add > input')]
    
    adds.forEach((el, index) => {
      if (el) {
        add[index].classList.add('selected')
        checkbox[index].checked = true
      } 
      else {
        add[index].classList.remove('selected')        
        checkbox[index].checked = false
      }
    });
  }, [adds])

  const handleClick = (e) => {
    e.preventDefault()
    const add = [...document.querySelectorAll('.add')]
    const checkbox = [...document.querySelectorAll('.add > input')]

    let index =  add.findIndex(el => el === e.target)

    checkbox[index].checked 
      ? checkbox[index].checked = false 
      : checkbox[index].checked = true

    setAdds(checkbox.map(el => el.checked))
  }

  return(
    <div className="add" onClick={handleClick}>
      <input type="checkbox" onClick={handleClick}/>
      <div className="add__text">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <p className="add__price">{content.price[timeframe]}</p>
    </div>
  )
}
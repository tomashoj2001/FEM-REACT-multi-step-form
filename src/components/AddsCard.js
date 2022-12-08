import { useEffect, useMemo } from "react"

export default function AddsCard ({content, timeframe, adds, setAdds}) {
  const add = useMemo(() => [...document.querySelectorAll('.add')], [])
  const checkbox = useMemo(() => [...document.querySelectorAll('.add > input')], [])
  
  useEffect(() => {
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
  }, [adds, add, checkbox])
  
  const handleClick = (e) => {
    let index = add.findIndex(el => el === e.target)

    console.log(index)
    console.log(add[index])
    console.log(checkbox[index].checked)

    checkbox[index].checked 
      ? checkbox[index].checked = false 
      : checkbox[index].checked = true

    setAdds(checkbox.map(el => el.checked))
    // console.log(adds)
  }

  // const handleClick = (e) => {
  //   const add = [...document.querySelectorAll('.add')]
  //   const checkbox = [...document.querySelectorAll('.add > input')]

  //   let index = add.findIndex(el => el === e.target)

  //   if (checkbox[index].checked === true) {
  //     checkbox[index].checked = false
  //     add[index].classList.remove('selected')
  //   } else {
  //     checkbox[index].checked = true
  //     add[index].classList.add('selected')
  //   }

  //   setAdds(checkbox.map(el => el.checked))
  // }

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
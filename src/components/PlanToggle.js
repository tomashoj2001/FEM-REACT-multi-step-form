import { useEffect } from "react"
import "./PlanToggle.css"

export default function PlanToggle( {timeframe, setTimeframe} ) {
  useEffect(() => {
    const toggle = document.querySelector('.switch > input')
    const btns = [...document.querySelectorAll('.toggle__btn')]

    if (timeframe === 0) {
      btns[0].classList.add('selected')
      btns[1].classList.remove('selected')
      toggle.checked = false
    } else {
      btns[0].classList.remove('selected')
      btns[1].classList.add('selected')
      toggle.checked = true
    }
  }, [timeframe])

  return(
    <section className="toggle">
      <p className="toggle__btn" onClick={() => setTimeframe(0)}>
        Monthly
      </p>
      
      <label className="switch">
        <input type="checkbox" onClick={() => setTimeframe(timeframe === 0 ? 1 : 0)} />
        <span className="slider round"></span>
      </label>

      <p className="toggle__btn" onClick={() => setTimeframe(1)}>
        Yearly
      </p>
    </section>
  )
}
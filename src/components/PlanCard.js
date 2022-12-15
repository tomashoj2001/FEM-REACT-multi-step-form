import { useEffect } from "react";

export default function PlanCard ({content, timeframe, plan, setPlan, number}) {
  useEffect(() => {
    const plans = [...document.querySelectorAll('.card')]
    plans.forEach(el => {
      el !== plans[plan] 
      ? el.classList.remove('selected')
      : el.classList.add('selected')
    });
  }, [plan])

  return(
    <div
      className="card" 
      onClick={() => setPlan(number)}
    >
      <img src={content.img} alt={content.title} />
      <div className="card__content">
        <h2 className="card__title">{content.title}</h2>
        <p className="card__price">{content.price[timeframe]}</p>
        
        {timeframe === 1 &&
          <p className="card__gift">2 month free</p>
        }
      </div>
    </div>
  )
}
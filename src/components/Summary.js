import "./Summary.css"
import SummaryAdd from "./SummaryAdd"

export default function Summary({summary, setPage}) {
  const {timeframe, plan, adds} = summary

  const tf = ["Monthly", "Yearly"]
  const pl = ["Arcade", "Advanced", "Pro"]
  const plPrice = [[9, 90], [12, 120], [15, 150]]
  const addPrice = [[1, 10], [2, 20], [2, 20]]

  let final = plPrice[plan][timeframe]

  const total = () => {
    adds.forEach((el, i) => {
      if (el) final += addPrice[i][timeframe]
    })    
    return final
  }

  // console.log(adds[0] || adds[1] || adds[2])

  return(
    <div>
      <h2 className="title">Finishing up</h2>
      <p className="description">Double-check everythinf looks OK before confirming.</p>

      <section className="summary">
        <section className="summary__flex summary__flex--margin">          
          <div className="summary__plan">
            <h2 className="summary__title">{pl[plan]}({tf[timeframe]})</h2>
            <button onClick={() => setPage(1)}>Change</button>
          </div>
          <p className="summary__price">
            ${plPrice[plan][timeframe]}/{timeframe === 0 ? "mo" : "yr"}
          </p>
        </section>

        {adds[0] || adds[1] || adds[2]
          ? <section className="summary__adds">
              {adds[0] ? <SummaryAdd index={0} timeframe={timeframe} /> : null}
              {adds[1] ? <SummaryAdd index={1} timeframe={timeframe} /> : null}
              {adds[2] ? <SummaryAdd index={2} timeframe={timeframe} /> : null}
            </section>
          : null
        }
      </section>

      <section className="summary__total">
        <p>
          Total(per {timeframe === 0 ? "month" : "year"})
        </p>
        <p className="summary__price">
          +${total()}/{timeframe === 0 ? "mo" : "yr"}
        </p>
      </section>
    </div>
  )
}
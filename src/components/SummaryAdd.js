export default function SummaryAdd ({index, timeframe}) {
  const add = ["Online service", "Larger storage", "Customizable profile"]
  const addPrice = [[1, 10], [2, 20], [2, 20]]

  return(
    <section className="summary__flex">
      <p>{add[index]}</p>
      <p className="summary__price">
        ${addPrice[index][timeframe]}/{timeframe === 0 ? "mo" : "yr"}
      </p>
    </section>
  )
}
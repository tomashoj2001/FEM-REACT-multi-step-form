export default function Summary({summary}) {
  return(
    <div>
      <h2 className="title">Finishing up</h2>
      <p className="description">Double-check everythinf looks OK before confirming.</p>
      <section className="summary">
        <h2>{summary.timeframe}</h2>
        <h2>{summary.plan}</h2>
      </section>
    </div>
  )
}
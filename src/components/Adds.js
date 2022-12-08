import "./Adds.css"
import AddsCard from "./AddsCard";

export default function Adds({timeframe, adds, setAdds}) {
  const content = [
    {
      title: "Online service",
      description: "Access to multiplayer games",
      price: ["+$1/mo", "+$10/yr"]
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: ["+$2/mo", "+$20/yr"]
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: ["+$2/mo", "+$20/yr"]
    },
  ]

  return(
    <>
      <h2 className="title">Pick add-ons</h2>
      <p className="description">Add-ons help enhance your gaming experience</p>
      <section className="adds">
        <AddsCard content={content[0]} timeframe={timeframe} adds={adds} setAdds={setAdds} />
        <AddsCard content={content[1]} timeframe={timeframe} adds={adds} setAdds={setAdds} />
        <AddsCard content={content[2]} timeframe={timeframe} adds={adds} setAdds={setAdds} />
      </section>
    </>
  )
}
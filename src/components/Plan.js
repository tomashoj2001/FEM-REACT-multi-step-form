import "./Plan.css"
import PlanCard from "./PlanCard";
import PlanToggle from "./PlanToggle";
import arcadeSVG from "../assets/images/icon-arcade.svg"
import advancedSVG from "../assets/images/icon-advanced.svg"
import proSVG from "../assets/images/icon-pro.svg"

export default function Plan({timeframe, setTimeframe, plan, setPlan}) {
  const content = [
    {
      img: arcadeSVG,
      title: "Arcade",
      price: ["$9/mo", "$90/yr"]
    },
    {
      img: advancedSVG,
      title: "Advanced",
      price: ["$12/mo", "$120/yr"]
    },
    {
      img: proSVG,
      title: "Pro",
      price: ["$15/mo", "$150/yr"]
    }
  ]
  
  return(
    <>
      <h1 className="title">Select your plan</h1>
      <p className="description">You have the option of monthly or yearly billing.</p>

      <section className="cards">
        <PlanCard
          content={content[0]} 
          timeframe={timeframe} 
          plan={plan} 
          setPlan={setPlan} 
          number={0}
        />
        <PlanCard
          content={content[1]} 
          timeframe={timeframe} 
          plan={plan} 
          setPlan={setPlan} 
          number={1}
        />
        <PlanCard
          content={content[2]} 
          timeframe={timeframe} 
          plan={plan} 
          setPlan={setPlan} 
          number={2}
        />
      </section>

      <PlanToggle timeframe={timeframe} setTimeframe={setTimeframe}/>
    </>
  )
}
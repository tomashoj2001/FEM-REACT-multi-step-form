import "./Thanks.css"
import img from "../assets/images/icon-thank-you.svg"

export default function Thanks() {
  return(
    <div className="thanks">
      <img src={img} alt="check" />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun using this platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}
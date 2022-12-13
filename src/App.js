import { useEffect, useState } from "react";
import Adds from "./components/Adds";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Plan from "./components/Plan";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import "./style.css"

// const initialForm = {
//   name: "",
//   email: "",
//   phone: ""
// }

function App() {
  // const [form, setForm] = useState(initialForm)
  const [page, setPage] = useState(0)
  const [timeframe, setTimeframe] = useState(0)
  const [plan, setPlan] = useState(0)
  const [adds, setAdds] = useState([false, false, false])

  let summary = {
    timeframe,
    plan,
    adds
  }

  useEffect(() => {
    const buttons = [...document.querySelectorAll('.nav__btn')]
    buttons.forEach(btn => {
      btn !== buttons[page] 
        ? btn.classList.remove('selected')
        : btn.classList.add('selected')
    })
  }, [page])

  return (
    <main>
      <Nav setPage={setPage} />
      <section className="main__container">
        {page === 0 && 
          <Info
            // form={form}
            // setForm={setForm}
        />}

        {page === 1 && 
          <Plan 
            timeframe={timeframe}
            setTimeframe={setTimeframe} 
            plan={plan} 
            setPlan={setPlan} 
          />
        }

        {page === 2 && 
          <Adds 
            timeframe={timeframe} 
            adds={adds} 
            setAdds={setAdds} 
          />
        }
        
        {page === 3 && <Summary summary={summary} setPage={setPage} />}
        {page === 4 && <Thanks />}

        {page > 0 && page !== 4 &&
          <button
            className="button left"
            onClick={() => setPage(page - 1)}
          >
            Go back
          </button>  
        }

        {page < 3 &&
          <button
            className="button right"
            onClick={() => setPage(page + 1)}
          >
            Next Step
          </button>  
        }

        {page === 3 &&
          <button
            className="button right confirm"
            onClick={() => setPage(page + 1)}
          >
            Confirm
          </button>  
        }
      </section>
    </main>
  );
}

export default App;
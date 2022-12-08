import "./Nav.css"

export default function Nav({ setPage }) {

  return(
    <nav>
      <div className="nav__item">
        <button 
          className="nav__btn selected"
          onClick={() => setPage(0)}
        >
          1
        </button>
        <div>
          <h3 className="nav__step">STEP 1</h3>
          <h2 className="nav__title">YOUR INFO</h2>
        </div>
      </div>

      <div className="nav__item">
        <button 
          className="nav__btn"
          onClick={() => setPage(1)}
        >
          2
        </button>
        <div>
          <h3 className="nav__step">STEP 2</h3>
          <h2 className="nav__title">SELECT PLAN</h2>
        </div>
      </div>

      <div className="nav__item">
        <button 
          className="nav__btn"
          onClick={() => setPage(2)}
        >
          3
        </button>
        <div>
          <h3 className="nav__step">STEP 3</h3>
          <h2 className="nav__title">ADD-ONS</h2>
        </div>
      </div>

      <div className="nav__item">
        <button 
          className="nav__btn"
          onClick={() => setPage(3)}
        >
          4
        </button>
        <div>
          <h3 className="nav__step">STEP 4</h3>
          <h2 className="nav__title">SUMMARY</h2>
        </div>
      </div>
    </nav>
  )
}
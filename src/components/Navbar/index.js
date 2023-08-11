import './index.css'

const Navbar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-item">
      <li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </li>
      <div className="nav-score-board">
        <li>
          <p className="score">
            Score:<span>{score}</span>
          </p>
        </li>
        <li className="timer-list">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="timer">{timer} sec</p>
        </li>
      </div>
    </nav>
  )
}

export default Navbar

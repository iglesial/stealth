import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <h1>Welcome Home</h1>
      <p>This is the home page of your application.</p>
      <Link to="/dashboard" className="nav-link">
        Go to Dashboard
      </Link>
    </div>
  )
}

export default Home

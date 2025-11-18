import { useAuthenticator } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  return (
    <div className="home">
      <h1>Welcome Home</h1>
      <p className="subtitle">Your application landing page</p>

      {user ? (
        <div className="user-section">
          <p className="greeting">Hello, {user.signInDetails?.loginId || 'User'}!</p>
          <p>You are signed in and ready to go.</p>
          <div className="button-group">
            <Link to="/dashboard" className="nav-link">
              Go to Dashboard
            </Link>
            <button onClick={signOut} className="nav-link logout-button">
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="guest-section">
          <p>Explore our application and access powerful features.</p>
          <div className="button-group">
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
            <Link to="/signup" className="nav-link primary-button">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

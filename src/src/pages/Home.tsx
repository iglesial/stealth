import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user])

  return (
    <div className="home">
      <h1>Welcome Home</h1>
      {user ? (
        <>
          <p>Hello, {user.signInDetails?.loginId || 'User'}!</p>
          <p>You are successfully signed in.</p>
          <div className="button-group">
            <Link to="/dashboard" className="nav-link">
              Go to Dashboard
            </Link>
            <button onClick={signOut} className="nav-link logout-button">
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <div className="auth-container">
          <p>Please sign in to access the dashboard.</p>
          <Authenticator />
        </div>
      )}
    </div>
  )
}

export default Home

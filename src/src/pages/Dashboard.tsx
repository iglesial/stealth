import { Link } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Here you can view your stats and metrics.</p>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-value">1,234</p>
        </div>
        <div className="stat-card">
          <h3>Active Sessions</h3>
          <p className="stat-value">42</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-value">$12,345</p>
        </div>
      </div>
      <Link to="/" className="nav-link">
        Back to Home
      </Link>
    </div>
  )
}

export default Dashboard

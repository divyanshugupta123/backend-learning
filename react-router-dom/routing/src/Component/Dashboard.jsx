import React from 'react'
import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <div>
        <h1>Welcome to DashBoard
        </h1>

        <Link to='/'>HOME</Link>
    </div>
  )
}

export default Dashboard
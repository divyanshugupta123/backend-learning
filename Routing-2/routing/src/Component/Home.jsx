import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>HOME PAGE</h1>
        <Link to="/Admin">Click for Admin</Link>
        <br />
        <Link to="/products">ProDuct</Link>
    </div>
  )
}

export default Home
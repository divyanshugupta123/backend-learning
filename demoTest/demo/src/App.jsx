import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Component/Login'
import Signup from './Component/Signup'
// import Home from './Component/Home'

const Home = React.lazy(()=> import("./Component/Home"))


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}>Signup</Route>
          <Route path='/login' element={<Login />}>Login </Route>
          <Route path='/home' element={<Suspense fallback="Loading....1">
            <Home/>
          </Suspense>}>
          Home
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
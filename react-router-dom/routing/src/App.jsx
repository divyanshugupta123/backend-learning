import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Product from "./Component/Product"
import Home from "./Component/Home"
import Dashboard from "./Component/Dashboard"

function App() {




  // const navigate = useNavigate()


  // function handleEvent1() {
  //   // this window is a global object and window.location.href is acting like a getter and setter as well


  //   // ab isse refresh hoga jo ki SPA m nahi hona chahiye tha to ab hum use krenge ek hook ko "useNavigate" jo ki prevent krega re loading se

  //   // window.location.href="/dashboard"


  //   navigate('/dashboard')
  // }
  // function handleEvent2() {
  //   window.location.href = "/products"
  // }
  return (

    <div>



      {/* style m {{}} phle wala evaluate krne k liye or dusra wala key value k liye */}



      <BrowserRouter>
        <Nav />
        <Routes>

          {/* element mtlb componbenet ki konsa component show krana chahte ho or kis path pr */}

          <Route path='/products' element={<Product />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Home />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

function Nav() {
  const navigate = useNavigate()


  function handleEvent1() {
    // this window is a global object and window.location.href is acting like a getter and setter as well


    // ab isse refresh hoga jo ki SPA m nahi hona chahiye tha to ab hum use krenge ek hook ko "useNavigate" jo ki prevent krega re loading se

    // window.location.href="/dashboard"


    navigate('/dashboard')
  }
  function handleEvent2() {
    // window.location.href = "/products"

    navigate('/products')
  }
  return (


    <nav style={{ backgroundColor: "red", color: "black" }}>
      <h1>HI I'm a navbar</h1>
      <button onClick={handleEvent1}>Dashboard</button>
      <button onClick={handleEvent2}>Product</button>
    </nav>
  )

}

export default App
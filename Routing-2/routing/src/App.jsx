import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from './Component/Admin'
import Home from './Component/Home'
// import Products from './Component/Products'


// ab hume jise lazyload krana tha this lazy accepts an callback function


const Products = React.lazy(()=>{
  import("./Component/Products")
})

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/admin' element={<Admin />}>Admin</Route>
          <Route path='/products' element={<Suspense fallback="Loading....1">
            <Products/>
          </Suspense>}>
          Productss
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
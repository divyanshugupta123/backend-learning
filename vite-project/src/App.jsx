import React from 'react'
import Hello from './Components/Hello'
import Homie from './Components/homie'
import Mapp from './Components/Mapp'
import Perso from './Components/Perso'

function App() {
  return (
    <div>
      {/* <Hello/>

      <Mapp/> */}
      {/* <Perso /> */}
      
      {/* these are props and can be catch as a parameter in function */}
      <Homie name="Divyanshu" age="19" favColor="laal" />
      {/* <Homie name="Vikas" age="69" favColor="orange" /> */}
    </div>
  )
}

export default App
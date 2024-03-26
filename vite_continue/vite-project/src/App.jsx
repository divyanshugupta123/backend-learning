import React, { Fragment, useState } from 'react'
import Car from './Components/Car';
import Frag from './Components/Frag';
import MeriGaadi , { Audi , Merci} from './Components/Car'
import Counter from './Components/Counter';
import Todo from './Components/Todo';
import Better from './Components/Better';

function App() {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  // VERY IMPORTANT
  // react can only return only a single parent just because of "reconciliation"

  // empty tag ko return krne se extra div nahi aaenge ab hum generally empty tag ko return krna psnd nahi krte to hum use krenge react fragment
  // return (
  //   <>
  //     <Frag/>
  //   </>

  // )
  return (
    <Fragment>
      {/* <Frag/>
      <Car/>
      <MeriGaadi/>
      <Audi/> */}

      {/* <Counter/> */}
      {/* <Todo/> */}

      <Better/>

    </Fragment>

  )
}

export default App
import React, { useState } from 'react'

function Counter() {
    let [count ,setCount] = useState(0);
    function handleCount(){
        setCount(count + 1)
    }
  return (
    <div>
        <button onClick={handleCount}>Count - {count}</button>
    </div>
  )
}

export default Counter  
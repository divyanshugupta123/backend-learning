import React, { useState } from 'react'

function PropDrillings() {
    let [count,setCount] = useState(0);

  return (
    <div>
        <Counting count={count}/>
        <Button count={count} setCount={setCount}/>
    </div>
  )
}


// ek aisa prop hai jo n level down m use ho raha hai so without any help vo access nahi ho skta use harr ek parents pr traverse krna pdega jisse code complex hota hai or manage krna bhi difficult ho jata hai to is prop drilling se bachne k liye hum use krte hain context api

function Counting({count}){
    return (
        <div>
            <h1>Count-{count}</h1>
        </div>
    )
}
function Button({count,setCount}){
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
    )
}
export default PropDrillings
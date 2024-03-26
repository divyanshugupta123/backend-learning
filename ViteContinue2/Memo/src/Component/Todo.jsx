import React, { useState } from 'react'

function Todo() {
  return (
    <div>
        <Show titl  = "baarish aa rahi hai "/>
        <Show titl  = "baarish aa rahi hai "/>
        <Show titl  = "baarish aa rahi hai "/>
        <Show titl  = "baarish aa rahi hai "/>
        <BadaShow titl = "Baarish ruk gayi" />
    </div>
  )
}

// MEMO se hume recalculate nahi krni pdegi hum use yaad kr lenge this tracks the props agr prop m koi change hua hai to vo use dobara se render kr dega

function Show({titl}){
    return(
<div>
    <h1>
        Title : {titl};
    </h1>
        </div>
    )
        
    
}

function BadaShow({titl}){
    let [t,setT] = useState(titl);
    function handleClick(){
        setT(Math.floor(Math.random()*100));
    }
    return(
        <div>
            <Show titl={t}/>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Todo 
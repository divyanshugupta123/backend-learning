import React, { memo, useState } from 'react'

function Memoo() {
    let[t,setT] = useState("Hey Divyanshu Gupta this is MEMO");
  return (
    //   in case of returning empty tag or fragments it not consider it as a parent so it will rerender all the child
    <div>
        <MyMemo titl ={t}/>
        <button onClick={()=>{setT(Math.floor(Math.random()*10))}}>Click</button>
        <MyMemo titl = "MEMO seekh lo"/>
        <MyMemo titl = "hahah"/>
    </div>
  )
}

// function MyMemo({titl}){
//     return(
//         <div>
//             <h1>Title : {titl}</h1>
//         </div>
//     )
// }

let MyMemo = memo(function({titl}){
    return(
        <div>
            <h1>Title : {titl}</h1>
        </div>
    )
});

export default Memoo
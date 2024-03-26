import React, { useState } from 'react'

function Todo() {

    let [t,setT] = useState("GYM");

    function changeTodo(){
        setT(t = "Hey");
    }
    return (
        <div>
            {/* these arguments are known as props */}
            <ShowTodo title={t} desc="kl se GYM" />
            <button onClick={changeTodo}>Click</button>
            <ShowTodo title="React" desc="kl se React" />
            <ShowTodo title="Placement" desc="kl se Placement" />
        </div>
    )
    // isse yeh problem aayi ki baki 2 bhi rerender ho ja rahe hain
    // bss hume sirf phla wala hi rerender krna hai to hum use krenge better wala
}

function ShowTodo({ title, desc }) {
    return (
        <div>
            <h1>Title : {title}</h1>
            <h1>Desc : {desc}</h1>
        </div>

    )
}

export default Todo
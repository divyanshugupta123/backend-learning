// import React from 'react'

function Perso() {
    function handleClick() {
        console.log("clicked")
    }
    function handleClick2(id) {
        console.log("clicked " + id)
    }
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <button onClick={() =>
                handleClick2(100)
            }>click</button>
        </div>
    )
}

export default Perso
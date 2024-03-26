import React ,{useState} from 'react'

function Better() {
    return (
        <div>
            <ChangeTodos title ="Don't speak"/>
            <Todos title = "Yashu"/>
            <Todos title = "Hey Handsome"/>
        </div>
    )
}
function Todos({title}) {
    return (
        <h1>Title: {title}</h1>
    )
}

function ChangeTodos({title}) {

    let [t,setT] = useState(title)
    function handleClick(){
setT(Math.floor(Math.random()*10))
    }
    return(
    <div>
        <Todos title={t} />
        <button onClick={handleClick}>Click</button>
    </div>
    )

}

export default Better
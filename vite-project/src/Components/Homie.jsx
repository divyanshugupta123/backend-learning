import React, { useState } from 'react'

// here props is a object
function Homie(props) {
    // let naam = props.name;
    // function logoutUser(){
    //     console.log(naam);
    //     naam = "anonymuous"
    //     console.log(naam)
    // }
    // variables direct change nahi hota vo change to ho jata hai pr render nahi hota to hum use krte hai useState jo ki ek hook hai (predifend functions) which accepts two arguments first is state(variable) and second is function
    // first is state or variable and second is function

    let [naam, setname] = useState(props.name)

    function logoutUser() {
        console.log(naam);
        // naam = 'anoanyomous'
        // ab yeh render bhi ho jaaega
        setname('anonymous')
        console.log(naam)
    }
    // console.log(props)
    return (
        <div>
            <h1>Name : {naam} </h1>
            <h2>Age :{props.age} </h2>
            <h3>Fav Color :{props.favColor} </h3>
            <button onClick={logoutUser}>LogOut</button>

        </div>
    )
}

export default Homie
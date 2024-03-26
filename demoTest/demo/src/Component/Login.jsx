import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <h1 style={{ color: "red", textAlign: "center" }}>Login</h1>
            <fieldset>
                <legend>Signin Here</legend>
                <form action="">
                    <label htmlFor="naam">Enter Your Name</label>
                    <input type="text" id='naam' />
                    <br /><br />
                    <label htmlFor="pass">Enter Your Password</label>
                    <input type="password" id='pass' />
                    <br /><br />
                    <button>Sumbit</button>

                </form>
            </fieldset>
            <Link style={{ marginLeft: "1000px" }} to="/home">Skip Now and Go on Home</Link>
        </div>
    )
}

export default Login
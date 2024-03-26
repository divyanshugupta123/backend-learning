import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <h1 style={{ color: "red", textAlign: "center" }}>Signup</h1>
            <fieldset>
                <legend>Signup Here</legend>
                <form action="">
                    <label htmlFor="naam">Enter Your Name</label>
                    <input type="text" id='naam' />
                    <br /><br />
                    <label htmlFor="pass">Enter Your Password</label>
                    <input type="password" id='pass' />
                    <br /><br />
                    <label htmlFor="passs">Re-enter Your Password</label>
                    <input type="password" id='passs' />
                    <br /><br />
                    <button>sumbit</button>

                </form>
            </fieldset>
            <br /><br /><br /><br />
            <Link style={{ marginLeft: "1000px" }} to="/login">Already have an account click here to login</Link>
        </div>
    )
}

export default Signup
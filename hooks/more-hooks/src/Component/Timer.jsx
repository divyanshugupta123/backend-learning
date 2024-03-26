import React, { useEffect, useState } from 'react'

function Timer() {
    let [d, setD] = useState(0)
    useEffect(function () {
        let id = setInterval((

        ) => { setD(d + 1) }, 1000)

        return () => {
            clearInterval(id);
        }
    }, [d])
    return (
        <div>Time : {d}</div>
    )
}

export default Timer
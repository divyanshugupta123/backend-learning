// rfce is a boiler plate which stands for react function component export 


// import React from 'react'


function Animal() {
    let arr = [10,20,30]
    let obj = {
        a:10
    }
  return (
    <div>
        <h1>Hey this is animal file in component and imported in App.js</h1>
        <p>{arr}

        {/* {obj} this is not allow  */}

        {obj.a}
        {JSON.stringify(obj)}
        </p>
    </div>
  )
}

export default Animal
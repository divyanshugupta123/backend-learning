

function Hello() {
    let a = Math.floor(Math.random()*10)
    let luckynumber = 7;
    let ele ;
    if(a === luckynumber){
        ele = <h1>lucky number</h1>
    }
    else{
        ele = <h1>Try Again</h1>
    }

  return (
    <div>
        <h1>
            hello from hello component {1+2}
        </h1>

        <h1>
            {ele} -&gt; {a} 
        </h1>
        
        
    </div>
  )
}

export default Hello
import Animal from "./Components/Animal";
import vikas from "./Components/vikas"

// this vikas file is not imported jiust because of naming convention short se start nahi krenge


function App(){

  let a = 10;
  let c = 'Dev '
  let b = true;

  let d = null;

  let e = undefined;

  
  return(
    <div>
      <Animal />
      <vikas/>
      {/* let b = 100; this is not allow we can not give a statemment inside return */}
      <h1>
        hello Vikas bhai {3+3};

      </h1>
      <p>{a}</p>
      <p>
        {b}
        {c}
        {/* this is not right way because boolean and null value can not be given to print this we use the following way */}
        {JSON.stringify(b)}
        {d}
        {JSON.stringify(d)}


        {e}
        
      </p>
    </div>
  )
}

export default App;
import React from 'react';
import {add,sub, mult, div} from "./Calc"
function App() {
  return(
  <>
  <div>
    <ol> 
      <li>The Sum of two no is{add(33,4)}</li>
      <li>The sub of two no is {sub(33,5)}</li>
      <li>The mult of two no is {mult(33,5)}</li>
      <li>The div of two no is {div(33,5)}</li>
    </ol>
  </div>
  </>
  );
}

export default App;
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//first arg is variable, and second is function which is responsilbe to update the variable
const [counter, setCounter] = useState(15);

//let counter = 15;
const addValue = () => {
  console.log("clicked", counter);
  
  //counter = counter + 1;
  if(counter < 20)
  {

    // excutes functions in batch, same calling won't be affecting the current result. When we write setCounter(counter+1) multiple times it is updated only once because in the onclick handler of that render, even after calling setCounter(counter + 1) multiple times the value of the counter is 15, 
    // because after our event handler finishes, then React re-renders the component. because react uses batch updates...which also makes states feel like asynchronous function
    setCounter(counter + 1);

  // used callback function for increment count, callback function doesn't work in batches
  // setCounter(prevCounter => prevCounter + 1);
  // setCounter(prevCounter => prevCounter + 1);
  // setCounter(prevCounter => prevCounter + 1);
  // setCounter(prevCounter => prevCounter + 1);
}
}

const removeValue = () => {
  if(counter > 0 )
  {
  setCounter(counter - 1);
  }
}
  return (
    <>

      <h1>Chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

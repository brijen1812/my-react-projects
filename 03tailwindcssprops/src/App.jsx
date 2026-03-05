import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Brijen",
    age: 31
  }

  let myArr = [1 ,2 ,3];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>      
      <Card username="chaiaurcode" data= {myObj} arrData={myArr} btnText="Click Me"/>
      <Card username="brijen react" data= {myObj} arrData={myArr}/>
    </>
  )
}

export default App

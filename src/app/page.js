 "use client"
import { useState } from "react"
  const App = () => {
  const [counter , setcounter] =  useState(0)
  const addvalue = () =>{
  setcounter(counter + 1)
  }
  const removeValue = () =>{
    setcounter(counter - 1 )
  }
return(
  <>
  <h1 className="bg-red-600  text-4xl text-center">The Counter Game :- {counter} </h1>
  <button onClick={addvalue} 
  className="bg-gray-400 flex-wrap px-3 py-3 ml-80 rounded">Add Number</button>
  
  <button  onClick={removeValue}
  className="bg-gray-400 flex-wrap px-3 py-3 mt-3 ml-80 rounded ">remove Number</button>
  
  </>

)
}
export default App

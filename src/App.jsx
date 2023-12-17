import { useState } from 'react'
import './App.css'
import Form from './Test'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'

function App() {
  const [token, setToken] = useState(null)
  
console.log("test")
  return (

   <div>
    
    <div><SignUpForm token={token} setToken={setToken} /></div>
    
    <div><Authenticate token={token} setToken={setToken} /></div>
    
   </div>

  )


//<Form/>

}

export default App

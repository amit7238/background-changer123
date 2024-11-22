import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './BgChange'
import BgChange from './BgChange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BgChange></BgChange>
      
    </>
  )
}

export default App

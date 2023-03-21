import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NodeInterface from './components/Node Interface/Interface'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NodeInterface />
    </div>
  )
}

export default App

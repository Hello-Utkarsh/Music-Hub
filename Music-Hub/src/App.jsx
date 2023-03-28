import { useState } from 'react'
import './App.css'
import Mainwindow from './components/Mainwindow'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black flex">
      <Sidebar/>
      <Mainwindow/>
    </div>
  )
}

export default App

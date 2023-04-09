import { useState } from 'react'
import './App.css'
import Mainwindow from './components/Mainwindow'
import Sidebar from './components/Sidebar'
import Song_api from './components/Song_api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black flex">
      <Sidebar/>
      <Mainwindow/>
      <Song_api/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Mainwindow from './components/Mainwindow'
import Sidebar from './components/Sidebar'
import Song_api from './components/Song_api'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black flex">
      <Login/>
      {/* <Sidebar/>
      <Mainwindow/>
      <Song_api/> */}
    </div>
  )
}

export default App

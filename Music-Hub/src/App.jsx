import './App.css'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Connect from './components/Connect'
import InPlaylist from './components/InPlaylist'
import Liked_playlist from './components/Liked_playlist'
import Player from './components/Player';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="Connect" element={<Connect />} />
        <Route path="Home/liked" element={<div className='bg-black flex h-[100vh]'>

          <Sidebar />
          <Liked_playlist />
          <Player />

        </div>} />
        
        <Route path="Home/inplaylist" element={<div className='bg-black flex '>

          <Sidebar />
          <InPlaylist />
          <Player />

        </div>} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

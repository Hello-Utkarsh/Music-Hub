import { useEffect, useState } from 'react'
import './App.css'
import Mainwindow from './components/Mainwindow'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Liked_playlist from './components/Liked_playlist'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    // <div>

    // </div>
  )
}

export default App

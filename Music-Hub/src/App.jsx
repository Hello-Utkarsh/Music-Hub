import { useState } from 'react'
import './App.css'
import Mainwindow from './components/Mainwindow'
import Sidebar from './components/Sidebar'
import Login from './components/Login'


function App() {
  const [token, set_token] = useState(undefined)

  const client_id = import.meta.env.VITE_CLIENT_ID
  const clientSecret = import.meta.env.VITE_CLIENTSECRET

  const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + clientSecret)

      },
      body: 'grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret'
    })
    let parsed_data = await result.json()
    set_token(parsed_data)
  }

  return (
    <div className="App bg-black flex">
      {token ? <div className='bg-black flex'>
        <Sidebar />
        <Mainwindow />
      </div> : <Login getToken={getToken} />}
    </div>
  )
}

export default App

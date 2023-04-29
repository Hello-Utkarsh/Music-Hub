import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Mainwindow from './Mainwindow'
import Login from './Login'

export default function Home(props) {
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
        console.log(token)
        // getUser()
    }

    useEffect(()=>{
        getToken()
    },[])

    const getUser = async (data) => {
        // console.log(data.access_token)
        const scopes = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-read-recently-played',
            'user-top-read'

        ]
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://127.0.0.1:5173/&scope=${scopes.join(' ')}&show_daialog=true`
        // const authorizeID = await fetch(authorize_url,{
        //   mode: 'no-cors'
        // })
        // console.log(authorizeID)
        const result2 = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer  ' + data.access_token,
                // 'Content-type': 'application/json'
            }
        })
        let parsed_data2 = await result2.json()
        console.log(parsed_data2)

    }
    



    return (
        <div className="App bg-black flex ">
            {token ? <div className='bg-black flex w-[100vw] '>

                <Sidebar />
                <Mainwindow token={token} />

            </div> : <Login />}
        </div>
    )
}




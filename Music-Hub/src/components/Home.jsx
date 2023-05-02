import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Mainwindow from './Mainwindow'
import Login from './Login'

export default function Home() {

    const [token, set_token] = useState(undefined)
    const [hash_token, set_hash_token] = useState(undefined)
    const [profile_details, set_details] = useState(undefined)
    
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
        const hash = window.location.hash
        if (hash) {
            set_hash_token(hash.substring(1).split('&')[0].split('=')[1])
        }

        getUser()

    }

    const getUser = async () => {
        const result2 = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer  ' + hash_token,
                'Content-type': 'application/json'
            }
        })
        let parsed_data2 = await result2.json()
        set_details(parsed_data2)

    }

    useEffect(() => {
        if (token == undefined) {
            getToken()
        }

        getUser()

    }, [token])

    return (
        <div className="App bg-black flex ">
            {token ? <div className='bg-black flex w-[100vw] '>

                <Sidebar />
                <Mainwindow token={token} user_details = {profile_details}/>

            </div> : <Login />}
        </div>
    )
}




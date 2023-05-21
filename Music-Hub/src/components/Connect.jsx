import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_hash_token } from './features/store'

export default function Connect() {

    const [token, set_token] = useState(undefined)
    const [signed, signit] = useState(false)
    const scopes = useSelector(state => state.scopes.value)

    // const scopes = [
    //     'user-read-email',
    //     'user-read-private',
    //     'user-read-playback-state',
    //     'user-modify-playback-state',
    //     'user-read-currently-playing',
    //     'user-read-playback-position',
    //     'user-read-recently-played',
    //     'user-top-read'

    // ]


    const client_id = import.meta.env.VITE_CLIENT_ID
    const clientSecret = import.meta.env.VITE_CLIENTSECRET

    const authorize = async () => {
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
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=http://127.0.0.1:5173/Home&scope=${scopes.join(' ')}&show_dialog=true`
        signit(true)
        

    }

    const getToken = async () => {
        console.log(token)
    }

    useEffect(() => {
        if (signed == false) {
            authorize()
        }
    }, [])

    
    return (
        <div className="App bg-black flex ">
            
        </div>
    )
}


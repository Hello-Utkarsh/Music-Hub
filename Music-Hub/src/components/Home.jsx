import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Mainwindow from './Mainwindow'
import Login from './Login'

export default function Home() {

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
        // console.log(token)
    }

    const getUser = async () => {
        // console.log(token.access_token)
        const result2 = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer  ' + token.access_token,
                'Content-type': 'application/json'
            }
        })
        let parsed_data2 = await result2.json()
        // console.log(parsed_data2)

    }


    useEffect(() => {
        if (token == undefined) {
            getToken()
        }
        if (token != undefined) {
            getUser()
        }
        

    }, [token])

    return (
        <div className="App bg-black flex ">
            {token ? <div className='bg-black flex w-[100vw] '>

                <Sidebar />
                <Mainwindow token={token} />

            </div> : <Login />}
        </div>
    )
}




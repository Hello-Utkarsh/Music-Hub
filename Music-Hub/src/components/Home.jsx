import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Mainwindow from './Mainwindow'
import Player from './Player'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { set_token, set_hash, set_details } from './features/store'

export default function Home() {

    const token = useSelector(state => state.token.value)
    const hash_token = useSelector(state => state.hash_token.value)
    const profile_details = useSelector(state => state.profile_details.value)
    const hash = window.location.hash
    const dispatch = useDispatch()


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
        dispatch(set_token(parsed_data))
        if (hash) {
            dispatch(set_hash(hash.substring(1).split('&')[0].split('=')[1]))

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
        dispatch(set_details(parsed_data2))

    }

    useEffect(() => {
        if (token == undefined) {
            getToken()
        }
        

        getUser()


    }, [token])

    // if (token != undefined) {
    //     // <Link to='Home/inplaylist' />
    //     return (
    //         <div className="App bg-black flex ">
    //             <div className='bg-black flex w-[100vw] '>

    //                 <Sidebar />
    //                 <Mainwindow token={token} user_details={profile_details} />
    //                 <Player/>

    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="App bg-black flex ">
            {/* <div className='bg-black flex w-[100vw] '>

                <Sidebar />
                <Mainwindow token={token} user_details={profile_details} />

            </div> */}
            {token ? <div className='flex w-[100vw] '>

                <Sidebar />
                <Mainwindow token={token} user_details={profile_details} />
                <Player/>

            </div> : <Login />}
        </div>
    )
}
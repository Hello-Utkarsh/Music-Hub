import React from 'react'
import Sidebar from './Sidebar'
import Mainwindow from './Mainwindow'

export default function Home(props) {
    return (
        <div className="App bg-black flex ">
            <div className='bg-black flex w-[100vw] '>

                <Sidebar/>
                <Mainwindow token={props.token} />

            </div>

        </div>
    )
}

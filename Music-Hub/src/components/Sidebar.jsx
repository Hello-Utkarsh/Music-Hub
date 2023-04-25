import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='w-1/6 text-white h-[100vh]'>

                <div className='px-5 py-4'>
                    <h1 className='text-3xl font-semibold'>Music Hub</h1>

                    <div className='py-10'>

                        {/* <h1 className=''>Menu</h1> */}

                        <div className='text-gray-500 py-1 px-2'>

                            <div className='flex items-center hover:text-white
                             transition-colors duration-300 text-gray-500 py-2'>

                                <span className="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
                                    home
                                </span>
                                <h1>Home</h1>

                            </div>

                            <div className='flex py-2 text-gray-500 items-center hover:text-white
                             transition-colors duration-300'>

                                <span className="material-symbols-outlined pr-1" style={{ fontSize: "30px" }}>
                                    add
                                </span>
                                <h1>Create Playlist</h1>
                            </div>
                            <div className='flex py-2 text-gray-500 items-center hover:text-white
                             transition-colors duration-300'>

                                <span className="material-symbols-outlined pr-2" style={{ fontSize: "30px" }}>
                                    favorite
                                </span>
                                <h1>Liked Songs</h1>
                            </div>

                        </div>

                        <div className='h-[0.1px] mt-3 bg-white w-full'></div>

                            <div className='flex mt-7 text-gray-500 items-center hover:text-white
                             transition-colors duration-300'>

                                <span className="material-symbols-outlined pr-2" style={{ fontSize: "30px" }}>
                                    bookmarks
                                </span>
                                <h1>Your Library</h1>
                            </div>

                    </div>
                </div>
            </div>
        )
    }
}

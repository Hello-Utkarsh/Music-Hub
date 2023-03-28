import React, { Component } from 'react'

export default class Mainwindow extends Component {

    

    
    render() {
        return (
            <div className='w-5/6 px-3 py-4 bg-white'>

                {/* Search Bar */}

                <div className='w-full flex justify-center'>
                    <div className='w-[60%] bg-gray-500 flex justify-center items-center rounded-xl'>
                        <span class="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
                            Search
                        </span>
                        <input type="text" placeholder='Search' className='w-[90%] bg-gray-500 h-8 outline-0' />
                    </div>
                </div>

                {/* Songs Section */}

                <div>

                </div>

            </div>
        )
    }
}

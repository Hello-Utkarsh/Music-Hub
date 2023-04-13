import React, { Component } from 'react'
// import options from '../Options'
import Songcards from './Songcards'
export default class Mainwindow extends Component {

    constructor() {
        super()
        this.state = {
            songs: []
        }
    }

    // fetchmusicapi = async () => {
    //     const fetchedata = await fetch('https://spotify23.p.rapidapi.com/search/?q=weeknd&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
    //     const parseddata = await fetchedata.json()
    //     this.setState({ songs: parseddata })
    //     console.log(this.state.songs)
    // }



    // componentDidMount() {
        // this.fetchmusicapi()
    // }

    render() {
        return (
            <div className='w-5/6 px-3 py-4 bg-black'>

                {/* Search Bar */}

                <div className='w-full flex justify-center'>
                    <div className='w-[60%] bg-gray-500 flex justify-center items-center rounded-xl'>
                        <span className="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
                            Search
                        </span>
                        <input type="text" placeholder='Search' className='w-[90%] bg-gray-500 h-8 outline-0' />
                    </div>
                </div>

                {/* Songs Section */}


                <div className='px-8 py-7 flex justify-around'>
                    <Songcards />
                    <Songcards />
                    <Songcards />
                    <Songcards />
                    <Songcards />
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'
import Songcards from './Songcards'
export default class Mainwindow extends Component {

    constructor(props) {
        super(props)

        this.state = {
            song_playlist: null
        }
    }


    getplaylist = async () => {
        const result_playlist = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer  ' + this.props.token.access_token,
                'Content-type': 'application/json'
            }
        })

        const parsed_data = await result_playlist.json()
        this.setState({
            song_playlist: parsed_data
        })
        console.log(this.state.song_playlist)
        if (this.state.song_playlist != null) {

            this.state.song_playlist.playlists.items.forEach(element => {
                // console.log(element.name, element.id)
            })

        }


    }

    componentDidMount() {
        this.getplaylist()
        // console.log(this.state.playlist)
    }

    render() {
        if (this.state.song_playlist != null) {
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


                    <div className='px-8 py-7 flex flex-wrap justify-around'>
                        {this.state.song_playlist.playlists.items.map((element) => {
                            // console.log(element.name, element.id)
                            return <Songcards playlist_name = {element.name}/>
                        })}
                    </div>

                </div>
            )
        }
        // return (
        //     <div className='w-5/6 px-3 py-4 bg-black'>

        //         {/* Search Bar */}

        //         <div className='w-full flex justify-center'>
        //             <div className='w-[60%] bg-gray-500 flex justify-center items-center rounded-xl'>
        //                 <span className="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
        //                     Search
        //                 </span>
        //                 <input type="text" placeholder='Search' className='w-[90%] bg-gray-500 h-8 outline-0' />
        //             </div>
        //         </div>



        //         {/* Songs Section */}


        //         <div className='px-8 py-7 flex justify-around'>



        //         </div>

        //     </div>
        // )
    }
}

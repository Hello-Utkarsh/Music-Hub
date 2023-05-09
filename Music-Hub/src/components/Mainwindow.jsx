import React, { Component } from 'react'
import Playlist_Cards from '../components/Playlist_Cards'
export default class Mainwindow extends Component {

    constructor(props) {
        super(props)

        this.state = {
            song_playlist: undefined
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
    }

    componentDidMount() {
        this.getplaylist()
    }

    render() {
        if (this.state.song_playlist != null) {
            return (
                <div className='w-5/6 h-full ml-[16.66%] px-3 py-4 bg-gradient-to-b from-[#4705a4d6] to-[#0000005d]'>

                    {/* Search Bar */}

                    <div className='w-full flex justify-center'>
                        <div className='w-[60%] bg-gray-700 flex justify-center items-center rounded-xl'>
                            <span className="material-symbols-outlined pr-2" style={{ fontSize: "28px" }}>
                                Search
                            </span>
                            <input type="text" placeholder='Search' className='w-[90%] bg-gray-700 h-8 outline-0' />
                        </div>
                        <div className='w-[10%] bg-gray-700 flex justify-around items-center ml-16 rounded-xl'>
                            <span className="material-symbols-outlined ml-1 mt-1" style={{ fontSize: "30px" }}>
                                person
                            </span>
                            <h3 className='font-semibold text-lg mr-1 text-white'>{this.props.user_details.display_name}</h3>
                        </div>
                    </div>



                    {/* Songs Section */}


                    <div className='px-8 py-7 flex flex-wrap'>
                        {this.state.song_playlist.playlists.items.map((element) => {
                            return <Playlist_Cards playlist_data={element} description = {element.description.slice(0,40)} playlist_name={element.name} playlist_id={element.id} playlist_img={element.images[0].url} />
                        })}
                    </div>

                </div>
            )
        }

    }
}

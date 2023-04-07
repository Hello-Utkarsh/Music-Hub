import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Songcards extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div className='bg-gray-700 h-48 w-44 hover:bg-gray-500 transition-colors duration-200 mx-2 justify-center items-center flex flex-col'>

        <div className='px-2 pt-3 py-9 w-[95%] h-[95%]'>

          <img src="https://th.bing.com/th/id/OIP.o9A22FDuVlB74qPIZfX3RgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='m-auto w-[100%] h-[100%]' />

          <h3 className='text-white font-medium pt-2 px-1'>Weeknd</h3>
        
        </div>
      </div>
    )
  }
}

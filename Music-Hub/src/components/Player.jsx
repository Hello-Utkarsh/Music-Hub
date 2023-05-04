import React from 'react'

export default function Player() {
    return (
        <div className='fixed bottom-0 flex items-center h-24 bg-black text-white w-full'>

            <div className='flex items-center h-full w-[20%]'>
                <img src="https://th.bing.com/th/id/OIP.o9A22FDuVlB74qPIZfX3RgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-16 pl-2' alt="" />
                <div className='px-2 flex flex-col h-full justify-center'>
                    <h3 className='text-base font-normal'>
                        Blinding Lights
                    </h3>
                    <p className='text-sm'>Weeknd</p>
                </div>
                <span class="material-symbols-outlined pl-4 cursor-pointer" style={{ color: 'white' }} >
                    favorite
                </span>
            </div>

            <div className='w-[30%] text-white h-full m-auto flex flex-col items-center justify-center'>
                <div className='w-full h-[50%] flex justify-center items-center'>
                    <span class="material-symbols-outlined font-light cursor-pointer mx-3" style={{ fontSize: '28px' }}>
                        arrow_back_ios
                    </span>
                    <span class="material-symbols-outlined font-light cursor-pointer mx-3" style={{ fontSize: '50px' }}>
                        play_arrow
                    </span>
                    <span class="material-symbols-outlined font-light cursor-pointer mx-3" style={{ fontSize: '28px' }}>
                        arrow_forward_ios
                    </span>
                </div>
                <div className='h-[50%] '>

                    <h3>seekbar</h3>

                </div>
            </div>

        </div>
    )
}

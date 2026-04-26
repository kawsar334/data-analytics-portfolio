import React from 'react'

const DetailsModal = ({ showdetails, setshowdetails, details }) => {
    return (
        <>
            {showdetails && <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.7)] p-8 z-[100]  flex  gap-4 flex-col'>
                <div className='w-full md:w-[90%] h-full overflow-auto p-5   bg-white mx-auto text-black flex justify-start items-start flex-col gap-3 '>
                    <div className='w-full text-end '>
                        <button className=' px-4 py-1 rounded cursor-pointer text-white bg-blue hover:bg-red-800 transition-all duration-500' onClick={() => setshowdetails(false)}>close</button>
                    </div>
                    <div className='px-5'>
                        <h1 className='text-2xl  font-semibold '>{details?.title}</h1>
                        <p className=''>{details?.desc}</p>
                        <div className='p-3 flex justify-center items-center '>
                            <a href={details?.demo} target='_blank' className='border bg-blue text-white px-4 py-1 w-[150px] flex justify-center items-center '>Live Link </a>
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-center items-center my-3 '>

                        <img src={details?.img} alt="" className='w-full md:w-[70%] h-[400px] object-cover ' />
                    </div>
                </div>

            </div>}
        </>
    )
}

export default DetailsModal
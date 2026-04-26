import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { frontend } from '../../data/Info';
import DetailsModal from './DetailsModal';

const DesignModal = ({ text }) => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [modal, setModal] = useState(false);

    const [showdetails, setshowdetails] = useState(false);
    const [details, setDetails] = useState({});


    const handleDetails = (item)=>{
        setDetails(item)
        setshowdetails(true)
    }

    return (
        <div>
            <div className="w-full m-auto flex justify-center items-center my-2">
                <button
                    onClick={() => setModal(!modal)}
                    className={` font-bold  ${darkMode ? "px-6 py-1 bg-gradient-to-r from-transparent to-blue  rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black]  rounded-lg text-[lightgray] "} `}>
                    <span className='mr-2 capitalize '>
                        {text}
                    </span>
                    <i className="fas fa-arrow-right transform -rotate-[30deg]"></i>
                </button>
            </div>
            

            <DetailsModal showdetails={showdetails}  setshowdetails={setshowdetails} details={details}/>
            {modal && <div className='fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.7)] p-8 z-50  flex  gap-4 flex-col  '>
                <div className=' w-[100%] md:w-[90%]   bg-gradient-to-r from-black  to-blue  text-white h-screen mx-auto overflow-y-auto rounded px-4'>
                    <div className='sticky top-0 my-3   px-3 py-1 cursor-pointer  flex justify-between items-center  w-[100%] md:w-[90%] mx-auto ' >
                        <h1 className=' text-xl text-center '>UI/UX Designs </h1>
                        <button className="bg-blue rounded   px-3 py-1 hover:bg-red-600  transition-all duration-500" onClick={() => setModal(!modal)}>close</button>
                    </div>
                    <div className='flex justify-center items-center flex-wrap gap-4 w-full   p-4'>
                        {frontend?.slice(0, 6).map((item) => (
                            <div className='parrentcard w-full md:w-[40%] lg:w-[30%] border-2 relative    rounded p-1 overflow-hidden'>
                                <img className='cartImg w-full h-[200px] object-cover ' src={item?.img} alt="" />
                                <div className='childrenCard absolute  w-full h-full left-0 top-0 bg-gradient-to-l from-[rgba(0,0,0,0.6)] to-blue  flex justify-start items-start flex-col  px-4 py-2 gap-2 ' >
                                    <h1 className='text-black'>{item?.title}</h1>
                                    <p className='first-letter:text-black first-letter:text-2xl'>{item?.desc.slice(0, 70)}...</p>
                                    <a href={item.demo} target='_blank' className='border  bg-gradient-to-b from-black to-blue  px-3 py-1 block w-full rounded  text-center'>Demo</a>
                                    <button onClick={() => handleDetails(item)} className='border bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-blue  px-3 py-1 block w-full rounded  text-center'>Details <i className='fa fa-eye'/> </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>}
        </div>
    )
}

export default DesignModal
import React, { useState, useEffect } from 'react'
import { CiEdit, CiSaveDown2 } from "react-icons/ci";
import { GoCopy } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Button, Loader } from 'rizzui';
const Documentation = () => {
  const [length, setLength] = useState(0)
  const [output, setOutput] = useState(0)
  const [loading, setLoading] = useState(false)
  const [cols, setCols] = useState(getScreenCols());
  // Function to determine the number of rows based on screen size
  function getScreenCols() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      return 27; // Large screen
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      return 150; // Medium screen
    } else {
      return 150; // Small screen
    }
  }

  useEffect(() => {
    // Update cols on window resize
    const handleResize = () => setCols(getScreenCols());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  function searchBtn() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    console.log('click')
  }
  return (
    <>
      <h2 className='bg-[#34312d] border-[1px] border-[#484441]
      justify-center items-center px-3 py-2 rounded-full'
      >Generate Documentation</h2>
      <div
        className='mx-3 bg-zinc-900
        bg-opacity-15 backdrop-blur-3xl rounded-md shadow-lg p-2'
        style={{
          backdropFilter: 'blur(150px)', // Adjust blur intensity
          boxShadow: '0px 4px 40px rgba(249, 233, 214,0.4)', // Bloom-like glow effect
          border: '1px solid rgba(249, 233, 214,0.1)', // Subtle border for bloom
          filter: 'brightness(1.0)', // Increase brightness for bloom
        }}>
        <div className='flex flex-row max-sm:flex-col max-md:flex-col
      justify-center items-center w-full gap-4
       overflow-hidden bg-[#1c1b1c] rounded-md shadow-sm p-2'>
          {/* left */}
          <div className='flex flex-col
        start gap-2 w-[40%] max-md:w-[90%] max-sm:w-[90%]  h-full'>
            {/* topic */}
            <div className='flex flex-col gap-2'>
              <p className='text-lg'>Code</p>
              <textarea
                className='rounded-md bg-[#34312d] border-2
                 border-[#484441] outline-none focus:outline
                  focus:outline-[#f9e9d6] px-2 py-1
                   transition-all ease-linear duration-200
                   max-md:w-full max-sm:w-full'
                rows={27}
                // cols={150}

                onChange={(e) => setLength(e.target.value.length)}
              />
              <div className='flex flex-row justify-between'>
                <p className='text-right'>{length} character</p>
                {loading ? <Loader variant="threeDot" />
                  : <Button
                    className='flex flex-row justify-center
                    items-center gap-3 bg-[#f9e9d6] text-black hover:bg-[#e1ceb8]'>
                    Generate Documentation
                    <IoSearchOutline onClick={() => searchBtn()} /></Button>}
              </div>
            </div>
          </div>
          {/* right */}
          <div className='w-[60%] flex flex-col
          gap-3 h-[70vh] overflow-hidden overflow-y-scroll'>
            <div className='flex flex-col gap-2'>
              <h4 className='font-semibold text-2xl max-md:text-lg'>
                How AI Genius can help you ?
              </h4>
              <div className='bg-zinc-800 p-2 mr-2
            rounded-md flex flex-col gap-3
            max-md:h-[50vh] h-[60vh]'>

                {/* tools */}
                <div className='flex flex-row gap-4 hover:cursor-pointer
               border-b-2 border-b-zinc-700
                py-1 max-md:text-md'>
                  <CiEdit />
                  <CiSaveDown2 />
                  <GoCopy />
                  <AiOutlineDelete />
                </div>
                {
                  <p>Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit.
                    Tenetur perspiciatis, nemo ullam, provident
                    consectetur expedita iusto totam ducimus
                    nihil quod quasi fugit consequuntur
                    vitae eius eum dolor officia est earum.
                  </p>
                }
                <span>{output} characters</span>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Documentation

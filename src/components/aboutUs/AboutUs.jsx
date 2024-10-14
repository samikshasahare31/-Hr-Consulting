import React from 'react'
import banner from '../../assets/images/about1.png'

function AboutUs() {
  return (
    <>
    <div className='pl-20 pr-20'>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12 '>
          <h3 className='font-bold'>ABOUT US</h3>
        <h1 className='text-4xl font-bold'>Empowering Talent and Business to Unlock Indonesia's Economic Potential</h1>
        <p className='text-xl'>HR Consulting offers hassle-free hiring, PEO, and HR services in Indonesia, helping you grow your business and connect with local talent easily. Trust us to navigate the complexities of Indonesian employment for you.</p>
        </div>
        <button className="btn btn-warning text-black px-4 md:px-12 py-2 rounded-md hover:text-white hover:bg-warning-600 duration-300 cursor-pointer mt-6 mb-20">Schedule Now <span className='font-bold'> →</span></button>
        </div>
        <div className='order-1 w-full md:w-1/2'>
        <img src={banner} className=' w-95 h-95 pt-12 ' alt=''/>
        </div>
    </div>
    </div>




    </>
  )
}

export default AboutUs

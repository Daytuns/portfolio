import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="mb-8">
          <div className="border-b border-black"></div>
          <div className="border-b border-[#171717]"></div>
    </div>
    <div className='mb-8 flex justify-between'>
        <p className='text-xs text-[#9f9ea0]'>&copy; 2025 Dayton Baldizón</p>
        <div className='flex flex-row items-center'>
          <div className="mr-2 flex h-3 w-3 items-center justify-center">
            <div className="h-1 w-1 rounded-full bg-green-500"></div>
            <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"></div>
          </div>
          <p className="text-xs text-[#9f9ea0]">Currently available for new opportunities</p>
        </div>
    </div>
    </>
  )
}

export default Footer
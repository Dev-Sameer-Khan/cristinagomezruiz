import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[90%] z-[9999] px-6 py-4 fixed top-0 flex items-center justify-between font-[bold] text-[1vw] mix-blend-difference'>
        <div className='flex flex-col leading-tight'>
            <h3 className='text-[#787878]'>Michael Rodriguez:</h3>
            <h3>Independent Photographer</h3>
        </div>
        <div className='flex flex-col leading-tight'>
            <h3 className='text-[#787878]'>Location:</h3>
            <h3>Uttar Pradesh, India ({new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</h3>
        </div>
        <div className='flex flex-col leading-tight'>
            <h3 className='text-[#787878]'>Navigation:</h3>
            <h3>Index, Work, Archive, Contact</h3>
        </div>
        <div className='flex flex-col leading-tight'>
            <h3 className='text-[#787878]'>Theme:</h3>
            <h3>Light Mode, Dark Mode</h3>
        </div>
    </nav>
  )
}

export default Navbar
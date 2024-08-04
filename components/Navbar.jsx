import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-items-center items-center py-4 px-8 bg-slate-800 text-white'>
            <h2 className='text-3xl font-bold'>ZenZone</h2>
            <ul className='flex w-full gap-9 justify-center text-center'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Services">Services</Link></li>
                <li><Link href="/Selling">Selling</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
            <input className='w-1/5 mx-1 p-1 border-none outline-none bg-slate-500' type="search" name="search" id="search" placeholder='Search Engine' />
        </nav>
    </div>
  )
}

export default Navbar
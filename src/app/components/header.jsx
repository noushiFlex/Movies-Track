"use client"

import React from 'react'
import Particles from '@/components/ui/particles'
import SparklesText from '@/components/ui/sparkles-text'


function Header() {
    return (
        <div className='text-3xl h-dvh w-full pt-5 flex flex-col'>
            <nav className='flex z-10  mx-auto justify-around w-5/12 h-14 bg-black rounded-sm text-white items-center sticky top-4 transition-all hover:scale-90'  onClick={(e) => {
                e.preventDefault();
                document.getElementById('yohannName').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }} >
                <a href='#yohannName' className=' font-bold abs ' >Contact</a>
            </nav>
            <div className='h-full flex justify-center items-center flex-col p-10'>
                <div className='text-5xl font-extrabold mb-10 '><SparklesText text="Movies Track" sparklesCount='15' /></div>
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={'#000000'}
                    refresh
                />
            </div>
        </div>
    )
}

export default Header
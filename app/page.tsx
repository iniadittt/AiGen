"use client";

import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import HeroImage from '@/public/images/bg.jpg'
import HeaderTyping from '@/app/components/HeaderTyping';


const Home = () => {
  return (
    <div className='w-full relative'>

      <div className="absolute z-50 w-full py-3 shadow-inherit">
        <nav className='container mx-auto flex flex-row justify-between'>
          <h1 className='text-2xl my-auto font-bold text-slate-200'>AiGen</h1>
          <Link href='/dashboard' className='px-7 py-2 rounded-full font-bold text-sm text-slate-200 bg-blue-700'>Login</Link>
        </nav>
      </div>
      <div className="w-full relative flex flex-col">

        <div className='w-full h-screen relative'>
          <div className='bg-black/60 w-full h-full absolute flex flex-col justify-center'>
            <p className='mx-auto w-2/3 text-center text-slate-200 text-6xl'>
              <HeaderTyping className='inline-block text-7xl font-bold leading-snug'/>
            </p>
          </div>
          <Image src={HeroImage} alt='Hero Image' width={1600} height={900} className='w-full h-full object-cover'/>
        </div>
      </div>
    </div>
  );
}

export default Home
'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import casal from '/public/static/quartos/casal/casal.png'
import casal1 from '/public/static/quartos/casal/casal-1.webp'
import casal2 from '/public/static/quartos/casal/casal-2.webp'
import casal3 from '/public/static/quartos/casal/casal-3.webp'
import casal4 from '/public/static/quartos/casal/casal-4.webp'
import casal5 from '/public/static/quartos/casal/casal-5.webp'


export default function Carousel() { 
  const [page, setPage] = useState(0)
  const fotos = [casal, casal1,casal2,casal3,casal4,casal5]
  return ( 
    <section className='hidden fixed w-10/12 inset-0 h-fit mx-auto top-1/4 bg-white'>
    <section className='w-1/3'>
      <Image src={fotos[page]} alt='fotos' className='bg-red-400'/>
      <button disabled={page === 0} onClick={() => setPage((prev) => prev - 1)} className='absolute left-4'>{'<'}</button>
      <button disabled={page === 5} onClick={() => setPage((prev) => prev + 1)} className='absolute right-4'>{'>'}</button>
    </section>
    </section>
  );
}


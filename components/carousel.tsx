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


export default function Carousel(closeView: (a: boolean) => void) {
  const [page, setPage] = useState(0)
  const fotos = [casal, casal1, casal2, casal3, casal4, casal5]
  return (
    <section onClick={() => closeView(true)} className='hidden fixed top-0 w-full h-full bg-opacity-50 bg-black'>
      <section className='fixed w-1/3 inset-0 h-fit mx-auto my-auto bg-white'>
        <Image src={fotos[page]} alt='fotos' className='bg-red-400' />
        <button disabled={page === 0} onClick={() => setPage((prev) => prev - 1)} className='absolute left-4'>{'<'}</button>
        <button disabled={page === 5} onClick={() => setPage((prev) => prev + 1)} className='absolute right-4'>{'>'}</button>
      </section>
    </section>
  );
}


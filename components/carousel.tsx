import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo_img from '/public/lavita_logo.webp'
import cover_img from '/public/main_cover.webp'
import f1 from '/public/static/fotos/pousada/1.jpeg'
import f2 from '/public/static/fotos/pousada/2.jpeg'
import f3 from '/public/static/fotos/pousada/3.jpeg'
import f4 from '/public/static/fotos/pousada/4.jpeg'
import f5 from '/public/static/fotos/pousada/5.jpeg'


export default function Carousel() {
  return (
    <header className='md:relative'>
      <section className='absolute  text-xl text-gray-100 flex justify-evenly top-4 right-0 w-[400px]'>
        <Link className='hover:text-yellow-500 hover:underline' href={'/fotos'}>Fotos</Link>
        <Link className='hover:text-yellow-500 hover:underline' href={'/fotos'}>Sobre</Link>
        <Link className='hover:text-yellow-500 hover:underline' href={'/fotos'}>Contato</Link>
      </section>
      <Image width={300} className='mx-auto md:mx-0 md:absolute top-0' priority={true} src={logo_img} alt='' />
      <Image className='shadow-xl w-full hidden md:block ' src={f1} alt='' />
    </header>

  )
}

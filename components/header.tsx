import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import logo_img from '/public/lavita_logo.webp'
import cover_img from '/public/static/elem/cover.webp'
import phone_img from '/public/static/elem/phone-cover.webp'
import insta_img from '/public/static/elem/insta.png'
import wpp_img from '/public/static/elem/wpp.png'

export default function Header() {
  return (
    <header id='home' className='block w-full mb-14'>
      <section className='bg-blue-2000 flex justify-center items-center'>
        <nav className='hidden w-[200px] font-bold text-white items-center justify-evenly top-2 right-0 sm:absolute sm:text-xs sm:flex 2xl:text-lg sm:w-[600px] md:w-[700px]'>
          <Link className='hover:text-yellow-500 hover:underline' href={'#home'}>HOME</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'#suites'}>SUÍTES</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'#pousada'}>POUSADA LA VITA</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'#contato'}>CONTATO</Link>
          <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770&text=Ola%20gostaria%20de%20fazer%20uma%20reserva'} className='bg-yellow-1000 text-gray-700 hover:bg-yellow-500 font-normal text-xs rounded sm:px-4 py-2 md:px-7 '>RESERVE JÁ</Link>
          <section className='flex items-center'>
            <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770&text=Ola%20gostaria%20de%20fazer%20uma%20reserva'}><Image src={wpp_img} width={38} alt='wpp_img' /></Link>
            <Link rel="noopener noreferrer" target="_blank" href={'https://www.instagram.com/pousadalavita/'}><Image src={insta_img} alt='instagram' /></Link>
          </section>
        </nav>
        <section className='absolute text-center flex flex-col'>
          <Image priority={true} width={300} className='mx-auto w-[150px] sm:w-[200px] md:w-[250px] 2xl:w-[350px] sm:mb-4 md:mb-6' src={logo_img} alt='lavita-logo' />
          <p className='font-bold p-2 sm:p-0 sm:mb-4 lg:mb-6 text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl w-[300px] sm:w-[380px] md:w-[440px] lg:w-[480px] 2xl:w-[570px] text-white'>
            DESCANSE NA POUSADA MAIS ACONCHEGANTE DE SÃO MIGUEL DOS MILAGRES
          </p>
          <p className='font-bold text-white mb-4 lg:mb-6 text-sm sm:text-base lg:text-xl'>
            11 99435-2770 | 82 98181-2331
          </p>
          <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770&text=Ola%20gostaria%20de%20fazer%20uma%20reserva'} className="py-2 sm:p-0 rounded text-xs text-gray-700 hover:bg-yellow-500 bg-yellow-1000 mx-auto px-6 sm:py-2 sm:px-10 lg:text-lg ">
            RESERVE JÁ
          </Link>
        </section>
        <Image priority={true} className='object-none hidden sm:block shadow-xl sm:h-screen sm:object-cover sm:object-bottom' src={cover_img} alt='foto-capa' />
        <Image priority={true} className='h-[400px] sm:hidden shadow-xl' src={phone_img} alt='foto-capa' />
      </section>
    </header>
  );
}


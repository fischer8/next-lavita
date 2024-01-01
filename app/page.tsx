import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_img from '/public/lavita_logo.webp'
import cover_img from '/public/static/elem/cover.png'
import insta from '/public/static/elem/insta.png'
import wpp from '/public/static/elem/wpp.png'

export default function Main() {
  return (
    <>
      <header className='bg-blue-400 flex justify-center items-center'>
        <nav className='hidden sm:absolute w-[200px] font-bold sm:text-xs text-sm text-white sm:flex items-center justify-evenly top-2 right-0 xl:py-4 sm:w-[600px] md:w-[700px]'>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>HOME</Link>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>SUÍTES</Link>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>POUSADA LA VITA</Link>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>CONTATO</Link>
          <button className='bg-yellow-1000 hover:bg-yellow-500 font-normal text-xs rounded sm:py-1 sm:px-2 md:py-2 md:px-4 text-black'>RESERVE JÁ</button>
          <section className='flex items-center'>
            <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770'}><Image src={wpp} width={38} alt='wpp' /></Link>
            <Link rel="noopener noreferrer" target="_blank" href={'https://www.instagram.com/pousadalavita/'}><Image src={insta} alt='instagram' /></Link>
          </section>
        </nav>
        <section className='sm:absolute text-center flex flex-col'>
          <Image width={300} className='mt-8 sm:mt-0 mx-auto sm:w-[100px] md:w-[150px] 2xl:w-[250px] mb-4 md:mb-6 xl:mb-10' priority={true} src={logo_img} alt='' />
          <p className='font-bold p-4 sm:p-0 mb-4 lg:mb-6 sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl sm:w-[390px] md:w-[440px] lg:w-[480px] 2xl:w-[570px] text-white'>
            DESCANSE NA POUSADA MAIS ACONCHEGANTE DE SÃO MIGUEL DOS MILAGRES
          </p>
          <p className='font-bold text-white mb-4 lg:mb-6 sm:text-sm lg:text-lg'>
            11 99435-2770 | 82 98181-2331
          </p>
          <button className="p-2 sm:p-0 rounded sm:text-xs text-black hover:bg-yellow-500 bg-yellow-1000 lg:w-[120px] mx-auto sm:py-1 sm:px-2 md:py-2 md:px-4">
            RESERVE JÁ
          </button>
        </section>
        <Image className='shadow-xl hidden absolute sm:block w-full' src={cover_img} alt='' />
      </header>
    </>
  );
}



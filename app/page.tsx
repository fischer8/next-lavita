import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo_img from '/public/lavita_logo.webp'
import cover_img from '/public/static/elem/cover.png'
import insta_img from '/public/static/elem/insta.png'
import wpp_img from '/public/static/elem/wpp.png'
import casal_img from '/public/static/fotos/quartos/casal.png'

export default function Main() {
  return (
    <>
      <header className='block mb-20'>
        <section className='bg-blue-400 flex justify-center items-center'>
          <nav className='hidden sm:absolute w-[200px] font-bold sm:text-xs text-sm text-white sm:flex items-center justify-evenly top-2 right-0 xl:py-4 sm:w-[600px] md:w-[700px]'>
            <Link className='hover:text-yellow hover:underline' href={'/fotos'}>HOME</Link>
            <Link className='hover:text-yellow hover:underline' href={'/fotos'}>SUÍTES</Link>
            <Link className='hover:text-yellow hover:underline' href={'/fotos'}>POUSADA LA VITA</Link>
            <Link className='hover:text-yellow hover:underline' href={'/fotos'}>CONTATO</Link>
            <button className='bg-yellow-1000 hover:bg-yellow-500 font-normal text-xs rounded sm:py-1 sm:px-2 md:py-2 md:px-4 text-black'>RESERVE JÁ</button>
            <section className='flex items-center'>
              <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770'}><Image src={wpp_img} width={38} alt='wpp_img' /></Link>
              <Link rel="noopener noreferrer" target="_blank" href={'https://www.insta_imggram.com/pousadalavita/'}><Image src={insta_img} alt='insta_imggram' /></Link>
            </section>
          </nav>
          <section className='absolute text-center flex flex-col'>
            <Image width={300} className='mx-auto w-[100px] md:w-[150px] 2xl:w-[250px] sm:mb-4 md:mb-6 xl:mb-10' priority={true} src={logo_img} alt='' />
            <p className='font-bold p-2 sm:p-0 sm:mb-4 lg:mb-6 text-xs sm:text-sm md:text-lg lg:text-xl 2xl:text-2xl w-[300px] sm:w-[330px] md:w-[440px] lg:w-[480px] 2xl:w-[570px] text-white'>
              DESCANSE NA POUSADA MAIS ACONCHEGANTE DE SÃO MIGUEL DOS MILAGRES
            </p>
            <p className='font-bold text-white mb-4 lg:mb-6 text-sm lg:text-lg'>
              11 99435-2770 | 82 98181-2331
            </p>
            <button className="p-2 sm:p-0 rounded text-xs text-black hover:bg-yellow-500 bg-yellow-1000 lg:w-[120px] mx-auto sm:py-1 sm:px-2 md:py-2 md:px-4">
              RESERVE JÁ
            </button>
          </section>
          <Image className='shadow-xl w-full' src={cover_img} alt='' />
        </section>
      </header>
      <main>
        <p className='mt-10 text-xs text-center border-black'>
          POUSADA LA VITA
        </p>
        <h1 className='text-center font-bold text-xl'>
          SUÍTES
        </h1>
        <hr className='w-[100px] mb-8 mx-auto h-[3px] bg-yellow-1000' />
        <p className='text-center w-3/4 sm:w-[530px] mb-4 sm:mb-0 mx-auto'>
          Nossas suítes são novas, espaçosas (17 m2) e muito confortáveis.
        </p>
        <p className='text-center mb-20 w-3/4 sm:w-[560px] mx-auto'>
          Todas estão equipadas com smart TV, ar condicionado, internet e frigobar
          e têm vista para o jardim.
        </p>
        <section className='mb-20 flex mx-auto w-5/6 sm:w-[560px] justify-center'>
          <Image className='sm:w-[250px]' width={200} src={casal_img} alt='suite-casal' />
          <section className='flex ms-4 flex-col'>
            <h2 className='bg-blue-1000 ps-1 mb-4 text-white font-bold'>Suítes casal</h2>
            <p className='ms-3 text-sm mb-4'>1 cama queen</p>
            <p className='ms-3 mb-4 text-xs'>Cama extra disponível, mediante pedido</p>
            <section className='ms-3 mt-6 flex'>
              <Image className='me-2' width={48} src={casal_img} alt='suite-casal' />
              <Image className='me-2' width={48} src={casal_img} alt='suite-casal' />
              <Image className='me-2' width={48} src={casal_img} alt='suite-casal' />
            </section>
          </section>
        </section>
      </main>
    </>
  );
}



import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo_img from '/public/lavita_logo.webp'
import cover_img from '/public/static/elem/cover.webp'
import phone_cover_img from '/public/static/elem/phone-cover.webp'
import insta_img from '/public/static/elem/insta.png'
import wpp_img from '/public/static/elem/wpp.png'
import casal_img from '/public/static/fotos/quartos/casal.png'

export default function Main() {
  return (
    <>
      <header id='home' className='block mb-10 sm:mb-20'>
        <section className='bg-blue-400 z-10 flex justify-center items-center'>
          <nav className='hidden w-[200px] font-bold text-sm text-white items-center justify-evenly top-2 right-0 sm:absolute sm:text-xs sm:flex xl:py-4 sm:w-[600px] md:w-[700px]'>
            <Link className='hover:text-yellow hover:underline' href={'#home'}>HOME</Link>
            <Link className='hover:text-yellow hover:underline' href={'#suites'}>SUÍTES</Link>
            <Link className='hover:text-yellow hover:underline' href={'#pousada'}>POUSADA LA VITA</Link>
            <Link className='hover:text-yellow hover:underline' href={'#contato'}>CONTATO</Link>
            <button className='bg-yellow-1000 text-black hover:bg-yellow-500 font-normal text-xs rounded sm:py-1 sm:px-2 md:py-2 md:px-4 '>RESERVE JÁ</button>
            <section className='flex items-center'>
              <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770'}><Image src={wpp_img} width={38} alt='wpp_img' /></Link>
              <Link rel="noopener noreferrer" target="_blank" href={'https://www.insta_imggram.com/pousadalavita/'}><Image src={insta_img} alt='insta_imggram' /></Link>
            </section>
          </nav>
          <section className='absolute text-center flex flex-col'>
            <Image priority={true} width={300} className='mx-auto w-[100px] md:w-[150px] 2xl:w-[250px] sm:mb-4 md:mb-6 xl:mb-10' src={logo_img} alt='lavita-logo' />
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
          <Image priority={true} className='shadow-xl sm:hidden' src={phone_cover_img} alt='foto-capa' />
          <Image priority={true} className='shadow-xl hidden sm:block' src={cover_img} alt='foto-capa' />
        </section>
      </header>
      <main id='suites'>
        <p className='sm:mt-10 text-xs text-center border-black 2xl:text-xl'>
          POUSADA LA VITA
        </p>
        <h1 className='text-center font-bold text-xl lg:mb-4 2xl:text-4xl'>
          SUÍTES
        </h1>
        <hr className='w-[100px] mb-8 mx-auto h-[3px] lg:h-[4px] 2xl:mb-16 2xl:w-[120px] bg-yellow-1000' />
        <p className='text-center w-3/4 sm:w-full 2xl:text-2xl mb-4 sm:mb-0 mx-auto'>
          Nossas suítes são novas, espaçosas (17 m2) e muito confortáveis.
        </p>
        <p className='text-center mb-14 sm:mb-16 2xl:mb-20 w-3/4 sm:w-[560px] 2xl:w-[840px] 2xl:text-2xl mx-auto'>
          Todas estão equipadas com smart TV, ar condicionado, internet e frigobar
          e têm vista para o jardim.
        </p>
        <section className='mb-20 flex flex-col sm:flex-row mx-auto w-5/6 sm:w-[560px] md:w-[700px] 2xl:w-[1000px] justify-between'>
          <Image className='mx-auto sm:mx-0 w-[250px] 2xl:w-[400px]' width={400} src={casal_img} alt='suite-casal' />
          <section className='flex mx-auto sm:mx-0 sm:ms-4 md:ms-8 w-full flex-col'>
            <h2 className='bg-blue-1000 rounded-b mx-auto sm:mx-0 w-[250px] sm:w-full ps-1 mb-4 2xl:mb-10 text-white 2xl:text-2xl font-bold'>Suíte casal</h2>
            <section className='mx-auto sm:mx-0 sm:w-full'>
              <p className='ms-3 text-sm 2xl:text-lg mb-4 2xl:ms-6 2xl:mb-8'>1 cama queen</p>
              <p className='ms-3 mb-4 2xl:ms-6 2xl:mb-8 text-sm'>Cama extra disponível, mediante pedido</p>
              <section className='ms-3 flex 2xl:ms-6'>
                <Image className='me-2 w-[48px] 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
                <Image className='me-2 w-[48px] 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
                <Image className='me-2 w-[48px] 2xl:w-[96px]' loading="lazy" width={96} src={casal_img} alt='suite-casal' />
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}



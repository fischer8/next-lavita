import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import footerLb from '/public/static/elem/footerLB.png'
import footerRT from '/public/static/elem/footerRT.png'
import logo_img from '/public/lavita_logo.webp'
import insta_img from '/public/static/elem/insta.png'
import wpp_img from '/public/static/elem/wpp.png'
import local from '/public/static/elem/local.png'

export default function Footer() {
  return (
    <section className='bg-blue-1000 text-white relative w-full pb-24 sm:pb-32'>
      <Image width={300} className='w-32 sm:w-52 2xl:w-[250px] absolute bottom-0 left-0' src={footerLb} alt='folhas' />
      <Image width={300} className='w-32 sm:w-52 2xl:w-[250px] absolute top-0 right-0' src={footerRT} alt='folhas' />
      <section className='flex flex-col-reverse justify-center sm:flex-row items-center flex-wrap z-50 sm:justify-around w-10/12'>
        <Image className='mt-10 sm:mt-20' width={200} src={logo_img} alt='logo-lavita' />
        <nav className='flex gap-2 sm:gap-0 mt-10 sm:mt-36 flex-col'>
          <p className='mb-2 font-bold'>POUSADA LA VITA</p>
          <Link className='hover:text-yellow-500 hover:underline' href={'#suites'}>Suítes</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'#pousada'}>Sobre a pousada</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'#sobre'}>O que falam de nós</Link>
          <Link rel="noopener noreferrer" target="_blank" href={'https://www.instagram.com/pousadalavita/'}>
            <Image className='h-14 w-14' src={insta_img} alt='instagram' />
          </Link>
        </nav>
        <section>
          <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770&text=Ola%20gostaria%20de%20fazer%20uma%20reserva'} className='flex mt-14 sm:mt-36 gap-2 mb-6'>
            <Image className='h-12 w-12' src={wpp_img} alt='whatsapp' />
            <section className='hover:text-yellow-500 hover:underline'>
              <p>11 99435-2770</p>
              <p>82 98181-2331</p>
            </section>
          </Link>
          <Link  className='flex' href={'https://maps.app.goo.gl/k4gvsaGCJSKRc5uA7'} rel="noopener noreferrer" target="_blank">
            <Image className='h-12 w-12' src={local} alt='local' />
            <section className='hover:text-yellow-500 hover:underline' >
              <p>R. do Jasmin, s/n</p>
              <p>Praia de Porto da Rua</p>
              <p>São Miguel dos Milagres - AL</p>
            </section>
          </Link>
        </section>
        <Link rel="noopener noreferrer" target="_blank" href={'https://api.whatsapp.com/send?phone=5511994352770&text=Ola%20gostaria%20de%20fazer%20uma%20reserva'} className="mt-14 text-gray-700 py-2 px-6 rounded bg-yellow-1000 hover:bg-yellow-500 sm:mt-32">
          RESERVE JÁ
        </Link>
      </section>
    </section>
  );
}


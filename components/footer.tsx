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
    <section className='bg-blue-1000 text-white relative w-full pb-32'>
      <Image width={300} className='w-32 sm:w-52 2xl:w-[250px] absolute bottom-0 left-0' src={footerLb} alt='folhas' />
      <Image width={300} className='w-32 sm:w-52 2xl:w-[250px] absolute top-0 right-0' src={footerRT} alt='folhas' />
      <section className='flex items-center flex-wrap z-50 justify-around w-10/12'>
        <Image className='mt-20' width={200} src={logo_img} alt='logo-lavita' />
        <section className='flex mt-40 flex-col'>
          <p>POUSADA LA VITA</p>
          <Link href={'#suites'}>Suítes</Link>
          <Link href={'#pousada'}>Sobre a pousada</Link>
          <Link href={'#sobre'}>O que falam de nós</Link>
          <Image className='h-14 w-14' src={insta_img} alt='instagram' />
        </section>
        <section>
          <section className='flex mt-40 gap-2 mb-6'>
            <Image className='h-12 w-12' src={wpp_img} alt='whatsapp' />
            <section>
              <p>11 99435-2770</p>
              <p>82 98181-2331</p>
            </section>
          </section>
          <section className='flex'>
            <Image className='h-12 w-12' src={local} alt='local' />
            <section>
              <p>R. do Jasmin, s/n</p>
              <p>Praia de Porto da Rua</p>
              <p>São Miguel dos Milagres - AL</p>
            </section>
          </section>
        </section>
        <button className="mt-40 ">
          RESERVE JÁ
        </button>
      </section>
    </section>
  );
}

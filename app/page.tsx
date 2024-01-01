import React from 'react'
import Image from 'next/image'
import SuiteCard from '@/components/suiteCard'
import Link from 'next/link'
import logo_img from '/public/lavita_logo.webp'
import suites from '@/components/suiteInfo'
import cover_img from '/public/static/elem/cover.png'
import insta from '/public/static/elem/insta.png'
import wpp from '/public/static/elem/wpp.png'

export default function Main() {
  const menu = suites.map((info, i) => <section className='shadow-xl rounded w-[280px] md:w-[250px] lg:w-[400px] m-10' key={`suite-${i}`}>{SuiteCard(info)}</section>)
  return (
    <>
      <header className='flex justify-center items-center'>
        <nav className='absolute font-bold text-l text-white flex justify-between top-4 right-0 py-4 w-[800px]'>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>HOME</Link>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>SUÍTES</Link>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>POUSADA LA VITA</Link>
          <Link className='hover:text-yellow hover:underline' href={'/fotos'}>CONTATO</Link>
          <section className='flex'>
            <button className='bg-yellow font-normal text-white'>RESERVE JÁ</button>
            <Link href={'/url'}><Image src={wpp} width={38} alt='wpp' /></Link>
            <Link href={'/url'}><Image src={insta} alt='instagram' /></Link>
          </section>
        </nav>
        <section className='absolute h-[650px] text-center flex justify-between flex-col'>
          <Image width={300} className='mx-auto mb-10' priority={true} src={logo_img} alt='' />
          <p className='font-bold mb-14 w-[600px] text-2xl text-white'>
            DESCANSE NA POUSADA MAIS ACONCHEGANTE DE SÃO MIGUEL DOS MILAGRES
          </p>
          <p className='font-bold text-white mb-14 text-xl'>
            11 99435-2770 | 82 98181-2331
          </p>
          <button className="rounded bg-yellow w-[200px] mx-auto py-4">
            RESERVE JÁ
          </button>
        </section>
        <Image className='shadow-xl w-full hidden md:block ' src={cover_img} alt='' />
      </header>
      <section className='flex shadow-2xl md:w-[700px] lg:w-[1200px] flex-wrap m-auto justify-center mb-10'>
        {menu}
      </section>
    </>
  );
}



import Image from 'next/image'
import SuiteCard from '@/components/suiteCard'
import suites from '@/components/suiteInfo'
import logo_img from '/public/lavita_logo.webp'
import cover_img from '/public/main_cover.webp'
import Link from 'next/link'

export default function Main() {
  const menu = suites.map((info, i) => <section className='shadow-xl rounded w-[280px] md:w-[250px] lg:w-[400px] m-10' key={`suite-${i}`}>{SuiteCard(info)}</section>)
  return (
    <>
      <header className='md:relative mx-auto md:w-[700px] lg:w-[1200px]'>
        <section className='absolute  text-xl text-gray-100 flex justify-evenly top-4 right-0 w-[400px]'>
          <Link className='hover:text-yellow-500 hover:underline' href={'/fotos'}>Fotos</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'/fotos'}>Sobre</Link>
          <Link className='hover:text-yellow-500 hover:underline' href={'/fotos'}>Contato</Link>
        </section>
        <Image width={300} className='mx-auto md:mx-0 md:absolute top-0' src={logo_img} alt='' />
        <Image className='shadow-xl hidden md:block ' src={cover_img} alt='' />
      </header>
      <section className='flex bg-white shadow-2xl md:w-[700px] lg:w-[1200px] flex-wrap m-auto justify-center mb-10'>
        {menu}
      </section>
    </>
  );
}



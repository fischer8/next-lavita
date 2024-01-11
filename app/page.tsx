import React from 'react'
//import dynamic from 'next/dynamic'
import Suites from '@/components/suites'
import Header from '@/components/header';
import Pousada from '@/components/pousada';
import Sobre from '@/components/sobre';
import Footer from '@/components/footer';
//const Suites = dynamic(() => import('@/components/suites'), { ssr: false })
export default function Main() {
  return (
    <>
      <Header />
      <Suites />
      <Pousada />
      <Sobre />
      <Footer />
    </>
  );
}



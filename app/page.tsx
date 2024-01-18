import React from 'react'
import Suites from '@/components/suites'
import Header from '@/components/header';
import Pousada from '@/components/pousada';
import Sobre from '@/components/sobre';
import Footer from '@/components/footer';

export default function Main() {
  return (
    <>
      <Header />
      <Suites />
      <Pousada />
      <Sobre />
      <iframe title='google maps da pousada la vita' className='w-full border border-t-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.009814146111!2d-35.3553602!3d-9.2434198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700fd934dc075b7%3A0x4e0f6ef601d74496!2sPOUSADA%20LA%20VITA!5e0!3m2!1sen!2sbr!4v1704989494885!5m2!1sen!2sbr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </>
  );
}



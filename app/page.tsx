'use client'

import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <main className="bg-imperialIndigo min-h-screen flex flex-col items-center justify-start">
      {/* TOP HEADER */}
      <section className="w-full border-b border-gold shadow-md py-2">
        <header className="max-w-7xl mx-auto px-4 py-3 flex items-center relative">
          {/* Center Title */}
    <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
      text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 
      font-serif font-bold text-gold whitespace-nowrap">
      <Link href="/">Carolingian Inc.</Link>
    </h1>

          {/* Nav Tabs */}
          <nav className="hidden sm:flex space-x-4 font-serif text-gold z-10 ml-auto">
      <Link href="/" className="hover:text-white transition">Home</Link>
      <Link href="/services" className="hover:text-white transition">Services</Link>
      <Link href="/invest" className="hover:text-white transition">Invest</Link>
      <Link href="/contact" className="hover:text-white transition">Contact</Link>
    </nav>
        </header>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] overflow-hidden">
  {/* Background Image */}
  <Image
    src="/hero.PNG"
    alt="Hero Background"
    fill
    className="object-cover object-top brightness-75"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex items-center justify-center sm:justify-start px-6 sm:px-16">
    <div className="max-w-xl text-white">
      {/* Logo */}
      <div className="relative w-40 h-40 sm:w-64 sm:h-64 mb-6 mx-auto sm:mx-0">
        <Image
          src="/carolingian_inc.png"
          alt="Carolingian Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-center sm:text-left text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-gold leading-tight">
        YOUR AMERICAN BUSINESS IS<br className="hidden sm:block" /> UNDER SILENT ATTACK
      </h1>

      {/* Paragraph */}
      <p className="mt-4 text-lg sm:text-md text-white/90 text-center font-serif sm:text-left">
        Foreign hackers. Big Tech monopolies. Rogue AIs. IRS audits.
        At Carolingian Inc., our engineers work around the clock to build and monitor your website — keeping your data streamlined and protected.
      </p>

      {/* CTA */}
      <div className="mt-6 flex justify-center sm:justify-start">
        <Link href="/services">
          <button className="bg-gold text-black font-serif text-lg sm:text-base px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
            Defend Your Business Now
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Footer (optional) */}
      {/* <Footer /> */}
    </main>
  )
}

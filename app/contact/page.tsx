'use client'

import Image from 'next/image'
import Link from 'next/link'
import { UnifrakturCook } from 'next/font/google'
import Footer from '@/components/footer'



export default function Contact() {
  return (
    <main className="bg-imperialIndigo min-h-screen flex flex-col items-center justify-start">
      {/* TOP HEADER */}
      <section className="w-full border-b border-gold shadow-md py-2">
        <header className="max-w-7xl mx-auto px-4 py-3 flex items-center relative">
          {/* Center Title */}
         <h1 className="font-serif absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-5xl font-bold text-gold">
            <Link href='/'>Carolingian Inc.</Link>
          </h1>

          {/* Nav Tabs */}
          <nav className="hidden sm:flex space-x-4 text-gold ml-auto font-serif z-10">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>
            <Link href="/invest" className="hover:text-white transition">Invest</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </nav>
        </header>
      </section>
      
      {/* Form Section */}
      <section className="bg-[#fdf7ef] text-gray-900 py-12 px-6 sm:px-12">
  <div className="max-w-xl mx-auto border border-gold rounded-2xl shadow-lg p-8 bg-white">
    <h2 className="text-3xl font-serif font-bold text-center text-gold mb-6">
      Contact Carolingian Inc.
    </h2>
    <form className="space-y-5" action="/api/contact" method="POST">
      <div>
        <label className="block font-semibold text-sm mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block font-semibold text-sm mb-1" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block font-semibold text-sm mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-gold"
        />
      </div>
      <div className="pt-4 text-center">
        <button
          type="submit"
          className="bg-gold text-white font-bold py-3 px-6 rounded-md hover:bg-yellow-600 transition"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>

    </main>
  );
}

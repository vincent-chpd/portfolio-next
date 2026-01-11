"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className="flex flex-col items-center text-center p-4 bg-background text-foreground mx-1 gap-40">
      <h4><Link href="/">Vincent <span className="text-primary">Chaussepied</span></Link></h4>
      <ul className='flex flex-col gap-4'>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href={'/about'}>ABOUT</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#services">SERVICES</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#projects">PROJECTS</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#testimonals">TESTIMONIALS</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#faq">FAQ</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#blog">BLOG</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#contact">CONTACT</Link></li>
      </ul>
      <div>
        <p>2023 - 2026</p>
        <p>vincent</p>
      </div>
    </nav>
  )
}

export default Header

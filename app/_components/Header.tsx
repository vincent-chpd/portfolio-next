"use client"
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 dark:bg-black bg-background text-foreground mx-4">
      <h4><Link href="/">Vincent <span className="text-primary">Chaussepied</span></Link></h4>
      <nav>
        <ul className='flex gap-4'>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#about">ABOUT</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#services">SERVICES</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#projects">PROJECTS</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#testimonals">TESTIMONIALS</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#faq">FAQ</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#blog">BLOG</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#contact">CONTACT</Link></li>
        </ul>
      </nav>

    </header>
  )
}

export default Header

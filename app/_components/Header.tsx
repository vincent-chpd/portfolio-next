"use client"
import Link from 'next/link'
import React from 'react'
import GithubLogo from '../icons/github-white-icon.svg'
import LinkedinLogo from '../icons/linkedin-app-white-icon.svg'
import Image from 'next/image'

const Header = () => {
  return (
    <nav className="flex flex-col items-center justify-between text-center p-4 bg-gray-800 text-foreground h-[100vh]">
      <h4><Link href="/">Vincent <span className="text-primary">Chaussepied</span></Link></h4>
      <ul className='flex flex-col gap-6'>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href={'/about'}>About</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href={'/projects'}>Projects</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#services">Services</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#testimonals">Testimonials</Link></li>
          <li className="hover:text-primary hover:font-bold p-2 "><Link href="/#contact">Contact</Link></li>
      </ul>
      <div className="flex items-center gap-4">
        <Link href={"https://github.com/vincent-chpd"}>
          <Image src={GithubLogo} width={30} height={30} alt='Github logo' />
        </Link>
        <Link href={"https://github.com/vincent-chpd"}>
          <Image src={LinkedinLogo} width={30} height={30} alt='Linkedin logo' />
        </Link>
      </div>
      <div className="text-gray-500 text-xs">
        <p>© 2023 - 2026 </p>
        <p>Frontend Developer</p>
        <p>London, United Kingdom</p>
      </div>
    </nav>
  )
}

export default Header

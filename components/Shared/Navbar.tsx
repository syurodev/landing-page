'use client'

import { useEffect, useRef, useState } from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

const Navbar = () => {

  const navRef = useRef<HTMLDivElement>(null)
  const [activeComponent, setActiveComponent] = useState<string>("#Home")

  const handleChangeNavBG = () => {
    if (window.scrollY >= 1) {
      navRef.current?.classList.add("backdrop-blur-xl", "shadow-sm")
    } else {
      navRef.current?.classList.remove("backdrop-blur-xl", "shadow-sm")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangeNavBG);

    return () => {
      window.removeEventListener('scroll', handleChangeNavBG);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className='container sticky top-0 flex justify-between items-center h-[60px] z-50'
    >
      <Link href={"/"} className='font-semibold'>Syuro<span className='text-primary'>.dev</span></Link>
      <ModeToggle />
    </nav>
  )
}

export default Navbar
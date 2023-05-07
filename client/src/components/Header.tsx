
import Link from 'next/link'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import Button from './ui/Button'

const Header: FC = () => {
  
  return (
    <header className={` top-0 z-[1000] duration-300 sticky bg-dark-header shadow-md shadow-[#ededed0f] px-4 py-2`}>
      <section className='flex items-center justify-between gap-12'>
        <Image src={'/images/logo.png'} className='w-[40px] h-[40px]' width={90} height={120} alt={'logo'}/>
        <nav className="items-center gap-4 hidden space-x-8 text-xl md:flex md:gap-1 flex-1" aria-label="navigation">
          <ul className='flex gap-2'>
            <li><Link href='#services' className={`text-xl py-2 hover:underline px-2`}>Services</Link></li>
            <li><Link href='#projects' className={`text-xl py-2 hover:underline px-2`}>Projects</Link></li>
            <li><Link href='#contact' className={`text-xl py-2 hover:underline px-2`}>Contact</Link></li>
          </ul>
        </nav>
        <Button> dsa</Button>
      </section>
    </header>
  )
}

export default Header
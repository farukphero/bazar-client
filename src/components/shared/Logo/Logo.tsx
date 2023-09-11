import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
        <h2 className='font-bold text-2xl text-white cursor-pointer'>BazaR</h2>
    </Link>
  )
}

export default Logo
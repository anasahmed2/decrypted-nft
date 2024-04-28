import React from 'react'
import "./styles.css"
import Image from 'next/image'
import Link from 'next/link'
import { headerLinks } from '@/app/config/constant'



function Header() {
    return (
        <>
            <header className='header-container'>
                <Image
                    width={282}
                    height={150}
                    loading='lazy'
                    alt='superheroine-logo'
                    src={"/assets/images/logo.png"}
                />
                <div className='header-links-container'>
                    {headerLinks?.map((value, index) => (   
                        <Link key={index} href="">{value.name}</Link>
                    ))}
                </div>
                <button className='showdowButton '>exclusive mint coming soon</button>
            </header>
            <div className='header-spacing'></div>
        </>
    )
}

export default Header
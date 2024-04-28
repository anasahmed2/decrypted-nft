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
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    width={282}
                    height={150}
                    loading='lazy'
                    alt='superheroine-logo'
                    src={"/assets/images/logo.png"}
                />
                <div className='header-links-container'>
                    {headerLinks?.map((value, index) => (
                        <Link
                        data-aos="flip-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                            key={index}
                            href={`#${value.id}`}>
                            {value.name}
                        </Link>
                    ))}
                </div>
                <Link
                    href={"/exclusive-mint"}
                    className='showdowButton'
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    exclusive mint coming soon
                </Link>
            </header>
            <div className='header-spacing'></div>
        </>
    )
}

export default Header
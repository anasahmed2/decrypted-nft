import React from 'react'
import "./styles.css"
import Image from 'next/image'
import Link from 'next/link'

const headerLinks = [
    {
        id: "home",
        name: "home",
    },
    {
        id: "Digital-collectibles",
        name: "Digital collectibles",
    },
    {
        id: "join-the-league",
        name: "join the league",
    },
    {
        id: "world",
        name: "world",
    },
    {
        id: "gazette",
        name: "gazette",
    },
]

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
import React from 'react'
import "./styles.css"
import Image from 'next/image'
import { headerLinks } from '@/app/config/constant'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='footer-container'>
            <main className='footer-main'>
                <section className='footer-top-container'>
                    <div className='footer-signUp-section'
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 className='section-heading footer-heading'>{`DON'T MISS OUT`}</h1>
                        <p className='footer-desc'>{`Sign up for the latest beauty news, product samples and coupons`}</p>
                        <input className="footer-input" name="text" placeholder="Search..." type="search" />
                        <button className='footer-signup-button'>sign up</button>
                    </div>
                    <div className='footer-logo-section' data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <Image
                            width={282}
                            height={150}
                            loading='lazy'
                            alt='superheroine-logo'
                            src={"/assets/images/logo.png"}
                            className='footer-logo-image'
                        />
                        <div className='footer-icon'>
                            <Image
                                width={45}
                                height={45}
                                loading='lazy'
                                alt='superheroine-logo'
                                src={"/assets/images/game-play-logo.svg"}
                                className='footer-logo-icon'
                            />
                            <Image
                                width={45}
                                height={45}
                                loading='lazy'
                                alt='superheroine-logo'
                                src={"/assets/images/x-logo.png"}
                                className='footer-logo-icon'
                            />
                        </div>
                    </div>

                </section>
                <div className='footer-links-container'>
                    {headerLinks?.map((value, index) => (
                        <Link  key={index} href={`#${value.id}`}>{value.name}</Link>
                    ))}
                </div>
            </main>
            <div className='copy-right-container'>
                <div className='copy-write-center'>
                    <Image
                        width={45}
                        height={45}
                        loading='lazy'
                        alt='superheroine-logo'
                        src={"/assets/images/game-play-logo.svg"}
                        className='footer-logo-icon'
                    />
                    <p>{`All Rights reserved -Superheroine Era.`}</p>
                </div>
                <div className='footer-go-to-top' >
                    <Link href={""}>{`Terms & Agreements`}</Link>
                    <Link href={""}>{`Privacy Policy`}</Link>
                    <Link href={""}>{`Back to Top`}</Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
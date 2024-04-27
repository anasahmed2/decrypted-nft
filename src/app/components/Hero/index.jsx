import React from 'react'
import "./styles.css"
import Image from 'next/image';

function Hero() {
    return (
        <main className='hero-container'>
            <h1 className='section-heading hero-heading'>digital collectibles for the creator economy</h1>
            <p className='hero-desc'>discover superheroine era,join the league and gain prime access to exclusive information and giveaways.</p>
            <button className='hero-button rounded-yellow-button'>
                <div>Let's explore</div>
            </button>
            <section className='hero-cards'>
                <div className='hero-card-imges-side'>
                    <Image
                        width={440}
                        height={500}
                        alt='hero-image'
                        src={"/assets/images/coverflow/hero-image-left.png"} />
                </div>
                <div className='hero-card-imges-middle'>
                    <Image
                        width={440}
                        height={500}
                        alt='hero-image'
                        src={"/assets/images/coverflow/hero-image-center.png"} />
                </div>
                <div className='hero-card-imges-side'>
                    <Image
                        width={440}
                        height={500}
                        alt='hero-image'
                        src={"/assets/images/coverflow/hero-image-right.png"} />
                </div>
            </section>
        </main>
    )
}

export default Hero;
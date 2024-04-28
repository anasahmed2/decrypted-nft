import React from 'react'
import "./styles.css"
import Image from 'next/image';

function Hero() {
    return (
        <main className='hero-container'
        >
            <h1 data-aos="fade"
                data-aos-duration="900"
                className='section-heading hero-heading'>
                digital collectibles for the creator economy
            </h1>
            <p
                data-aos="fade"
                data-aos-duration="900"
                className='hero-desc'>
                discover superheroine era,join the league and gain prime access to exclusive information and giveaways.
            </p>
            <button data-aos="fade"
                data-aos-duration="900"
                className='hero-button rounded-yellow-button'>
                <div>Let's explore</div>
            </button>
            <section className='hero-cards'>
                <div className='hero-card-imges-side'>
                    <Image
                        data-aos="fade-down"
                        data-aos-duration="900"
                        width={440}
                        height={500}
                        alt='hero-image'
                        src={"/assets/images/coverflow/hero-image-left.png"} />
                </div>
                <div className='hero-card-imges-middle'>
                    <Image
                        data-aos="fade-down"
                        data-aos-duration="900"

                        width={440}
                        height={500}
                        alt='hero-image'
                        src={"/assets/images/coverflow/hero-image-center.png"} />
                </div>
                <div className='hero-card-imges-side'>
                    <Image
                        data-aos="fade-down"
                        data-aos-duration="900"

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
import React from 'react'
import "./styles.css"
import Image from 'next/image'
import Link from 'next/link'

function DigitalCollectCard() {
    return (
        <main className='digitalCard-container'>
            <div className='digital-card-image'>
                <Image
                loading='lazy'
                    width={440}
                    height={500}
                    alt='hero-image'
                    src={"/assets/images/coverflow/hero-image-center.png"} />
            </div>
            <div className='digital-card-detail'>
                <div className='digital-logo-container'>
                    <Image
                    loading='lazy'
                        width={282}
                        height={150}
                        alt='superheroine-logo-digital'
                        src={"/assets/images/logo.png"}
                    />
                </div>
                <div className='digital-card-heading-container'>
                    <h2 className='field-heading digital-card-heading'>About Us</h2>
                    <p>Superheroine Era is a digital collectibles project that aims to design a new society of superheroes. Launching with an evocative 3-act, 54-scene screenplay and otherworld based on the digital collectibles, with each of the 54-scenes evolving into its own unique comic and character storylines. Traverse this world with us, co-create and enrich the expansive universe.</p>
                </div>
                <div className='digital-card-heading-container'>
                    <div className='heading-with-point'>
                        <h2 className='field-heading digital-card-heading'>TO OUR HOLDERS:</h2>
                        <span>brace yourselves for what's coming. It's going to be legendary!</span>
                    </div>
                    <p>Our mission is to foster ownership and engagement within our web-3 brand by bridging the gap between our community and the web-2 world, creating a space where members can participate through incentives and mechanics without compromising the integrity of their NFTs</p>
                </div>
                <div className='digital-card-link-container'>
                    <h3>Join us on  <Link href={""}>Discord</Link> & <Link href={""}>Twiter</Link></h3>
                </div>
                <button className='showdowButton digital-collect-spacing'>Read more</button>
            </div>
        </main>
    )
}

export { DigitalCollectCard }
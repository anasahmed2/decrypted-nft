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

function SuperHeroWorldCard(props) {
    const {
        revers,
        image,
        heading,
        detail,
        points } = props
    return (
        <main className={`superHeroWorldCard-container ${revers && "revers"}`}>
            <div className='superHeroWorldCard-text-side'>
                <div className='superHeroWorldCard-detail'>
                    <h4 className='superHeroWorldCard-heading'>{heading}</h4>
                    <p>{detail}</p>
                    <ul className='superHeroWorldCard-list'>
                        {points?.map((value, index) => (
                            <li key={index}>{value.point}</li>
                        ))}
                    </ul>
                </div>
                <div className='superHeroWorldCard-weapon'>
                    <Image
                        width={541}
                        height={601}
                        alt="WEAPON image"
                        src={image}
                        loading='lazy'
                        className={`${revers ? "superHeroWorldCard-weapon-right" : "superHeroWorldCard-weapon-left"}`} />
                </div>
            </div>
            <div className='superHeroWorldCard-image-side relative'>
                <Image
                    width={326}
                    height={52}
                    alt={`point-${revers ? "" : ""}`}
                    src={`${revers ? "/assets/images/point-right.svg" : "/assets/images/point-left.svg"}`}
                    loading='lazy'
                />
            </div>
        </main>
    )
}


function RoadMapSildeCard(props) {
    const {
        check,
        index,
        heading } = props

    const formatSerialNumber = (num) => {
        return num < 10 ? `0${num}` : num;
    };
    return (
        <main className='roadMapSildeCard-container'>
            <div className='roadmapp-heading'>
                <span className='roadmap-sno'>{formatSerialNumber(index + 1)}</span>
                <h2 className='field-heading roadmap-card-heading'>{heading}</h2>
            </div>
            <div className={`roadmap-status ${check ? "roadmap-status-check" : "roadmap-status-uncheck"} `}>
                {check ? (`Launched `) : "Pipeline"}
                {check && <Image width={30} height={30} alt='check' src={"/assets/images/icons/check-mark.svg"} />}
            </div>
        </main>
    )
}


function FeatureCard(props) {
    const {image} = props
    return (
        <main className='featureCard-container'>
            <Image width={380 } height={ 467} alt='Card_image' src={image} loading='lazy' />
        </main>
    )
}
export { DigitalCollectCard, SuperHeroWorldCard, RoadMapSildeCard, FeatureCard }
import React from 'react'
import "./styles.css"
import Image from 'next/image'
function JoinDiscord() {
    return (
        <div className='fixed-container'>
            <div className='joinDiscord-bgImage'>
                <h1
                    className='section-heading JoinDiscord-heading'
                    data-aos="fade"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    JOIN US VIA DISCORD
                </h1>
                <div
                    data-aos="flip-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className='red-underline'
                ></div>
                <p
                    className='joinDiscord-desc'
                    data-aos="fade"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    Invest and manage all your NFTs at one place.
                </p>
                <Image
                    width={90}
                    height={90}
                    alt='discord-logo'
                    src={"/assets/images/icons/discord-round.svg"}
                    className='discord-image'
                    data-aos="flip-left"
                    data-aos-easing="linear"
                    data-aos-duration="1000" />
            </div>

        </div>
    )
}

export default JoinDiscord
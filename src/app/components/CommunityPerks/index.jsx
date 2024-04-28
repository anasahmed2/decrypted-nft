import React from 'react'
import "./styles.css"
import Image from 'next/image'

function CommunityPerks() {
    return (
        <main className='fixed-container communityPerks-container'>
            <h2 data-aos="fade" className='underline-heading'>Community Perks</h2>
            <h1 data-aos="fade"  className='section-heading digital-collect-heading'>JOIN THE LEAGUE</h1>
            <div className='communityPerks-img'>
                <Image
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                    width={1054}
                    height={433}
                    alt='community-image'
                    loading='lazy'
                    src={"/assets/images/LandPage.jpg"}
                />
            </div>
            <p data-aos="fade"  className='communityPerks-desc'>A new society and group of enthusiasts awaits you. Join us in a new Era. Sign-up for our newsletter to gain insider access and exclusive updates.</p>
            <button data-aos="fade"  className='showdowButton'>sign up</button>
        </main>
    )
}

export default CommunityPerks
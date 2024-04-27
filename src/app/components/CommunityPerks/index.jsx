import React from 'react'
import "./styles.css"
import Image from 'next/image'

function CommunityPerks() {
    return (
        <main className='fixed-container communityPerks-container'>
            <h2 className='underline-heading'>Community Perks</h2>
            <h1 className='section-heading digital-collect-heading'>JOIN THE LEAGUE</h1>
            <div className='communityPerks-img'>
                <Image
                    width={1054}
                    height={433}
                    alt='community-image'
                    loading='lazy'
                    src={"/assets/images/LandPage.jpg"}
                />
            </div>
            <p className='communityPerks-desc'>A new society and group of enthusiasts awaits you. Join us in a new Era. Sign-up for our newsletter to gain insider access and exclusive updates.</p>
            <button className='showdowButton'>sign up</button>
        </main>
    )
}

export default CommunityPerks
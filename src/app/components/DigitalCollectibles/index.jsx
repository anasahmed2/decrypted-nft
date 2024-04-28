import React from 'react'
import "./styles.css"
import { DigitalCollectCard } from '../Card';

function DigitalCollectibles() {
    return (
        <main className='digital-collect-container fixed-container relative' id='digital-collectibles'>
            <h2 data-aos="fade-down"
                data-aos-duration="900" className='underline-heading'>Digital collectibles</h2>
            <h1 data-aos="fade-down"
                data-aos-duration="900" className='section-heading digital-collect-heading'>welcome to the next league of digital collectbles.</h1>
            <p data-aos="fade-down"
                data-aos-duration="900" className='digital-collect-desc'>
                {`Imagine owning superhero IP before it made headlines.
                 We're at the starting line of a digital IP innovation race,
                  and a few fortunate early adopters are about to pilot the next wave of superhero market adoption.
                  Rising to champion this movement is Superheroine Era.`}
            </p>
            <DigitalCollectCard />
            <div className='yellow-spot digital-spot-position'></div>
        </main>
    )
}

export default DigitalCollectibles;
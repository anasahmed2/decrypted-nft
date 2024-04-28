import React from 'react'
import "./styles.css"
import Image from 'next/image'

function NewsForJoin() {
    return (
        <main className='fixed-container newforJoin-container relative'>
            <div className='newforJoinCard-container'>
                <Image
                    width={500}
                    height={500}
                    alt='superheroImage'
                    src={"/assets/images/news-left.png"}
                    loading='lazy'
                    className='news-left' />
                <div className='newforJoinCard-heading-container'>
                    <h1 className='section-heading NewsForJoin-heading'>JOIN OUR COMMUNITY FOR INSIDER ACCESS</h1>
                    <button className='showdowButton'>
                        Join Now
                    </button>
                </div>
                <Image
                    width={500}
                    height={500}
                    alt='superheroImage'
                    src={"/assets/images/news-right.png"}
                    loading='lazy'
                    className='news-right' />
            </div>
        </main>
    )
}

export default NewsForJoin
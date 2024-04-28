import React from 'react'
import "./styles.css"
import { NftItemCard } from '../Card';

function NFT_items(props) {
  const { heading, cardData } = props

  return (
    <main className='fixed-container nft-itmes-container'>
      <h1 className='section-heading nftItems_heading'
       data-aos="fade"
       data-aos-easing="linear"
       data-aos-duration="800">
        {heading}
      </h1>

      <div className='nftItems-card-conatainer'>
        {cardData?.map((value  , index) => (
          <NftItemCard {...value} key={index}/>
        ))}
      </div>
     {cardData?.length >= 6 && <button className='showdowButton'>View All</button>}
    </main>
  )
}

export default NFT_items;
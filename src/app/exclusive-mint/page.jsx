import React from 'react'
import "./exclusiveMint.css"
import Header from '../components/Header';
import EasyStep from '../components/EasySteps';
import NFT_items from '../components/NFT_items';
import { nftItems_Card_Data } from '../config/constant';
import JoinDiscord from '../components/JoinDiscord';
import Footer from '../components/Footer';

function ExclusiveMint() {
  return (
    <main className="container">
      <Header />
      <EasyStep />
      <div className='main-greadent-section purple-black-greadent'>
        {nftItems_Card_Data.map((value, index) => (
          <NFT_items {...value} key={index} />
        ))}
      </div>
      <div className='main-greadent-section'>
       <JoinDiscord />
      </div>
      <div className='main-greadent-section footer-spacing'>
       <Footer />
      </div>
    </main>
  )
}

export default ExclusiveMint;
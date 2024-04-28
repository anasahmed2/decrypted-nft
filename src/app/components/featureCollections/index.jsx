import React from 'react'
import "./styles.css"
import { FeatureCard } from '../Card';
import { featuresCard_data } from '@/app/config/constant';

function FeatureCollections() {
  return (
    <main className='fixed-container featureCollections-container'>
      <h1 className='section-heading featureCollections-heading'>FEATURED COLLECTION</h1>
      <section className='featureCollectionsCard-container'>\
        {featuresCard_data.map((value, index) => (
        <FeatureCard {...value} />
      ))}
      </section>
      <button className='showdowButton'>
        View more
      </button>
    </main>
  )
}

export default FeatureCollections;
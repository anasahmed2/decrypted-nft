import React from 'react'
import "./styles.css"
import { SuperHeroWorldCard } from '../Card'
import { supper_hero_card_data } from '@/app/config/constant'



function SuperHeroWorld() {
  
  return (
    <main className='superHeroWorld-container fixed-container'>
        <h1 className='section-heading superHeroWorld-heading'>SUPERHEROINE WORLD</h1>
        <section className='superHeroWorld-card-container'>
          {supper_hero_card_data?.map((value,index)=>(
          <SuperHeroWorldCard {...value} key={index}/>
          ))}
        </section>
    </main>
  )
}

export default SuperHeroWorld
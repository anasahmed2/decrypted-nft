import React from 'react'
import "./styles.css"
import { EasyStepCard } from '../Card'
import { easyStep_data } from '@/app/config/constant'

function EasyStep() {
  return (
    <main className='easystep-container fixed-container' >
      <h2
        className='underline-heading easystep-heading'
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1000">
        Easy Step
      </h2>
      <h1
        className='section-heading easystep-main-heading'
        data-aos="fade"
        data-aos-easing="linear"
        data-aos-duration="1000">
        HOW TO MINT
      </h1>
      <section className='easyStep-card-caontainer' >
        {easyStep_data?.map((value, index) => (
          <EasyStepCard {...value} index={index} key={index} />
        ))}
      </section>
    </main>
  )
}

export default EasyStep
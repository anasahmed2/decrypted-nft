import React from 'react'
import "./styles.css"
import { RoadMapSildeCard } from '../Card'
import { roadmap_data } from '@/app/config/constant'

function RoadMaps() {
  return (
    <main className='fixed-container roadmap-container'>
        <h1 className='section-heading roadmap-heading'>Roadmap</h1>
        <section className='roadmap-silde-container'>
            {roadmap_data?.map((value,index)=>(
               <RoadMapSildeCard {...value} index={index} key={index}/> 
            ))}
        </section>
    </main>
  )
}

export default RoadMaps